"""
transformuje prehled dislokaci a ulozi primo do databaze


"""

import csv
import os

import pymysql.cursors
from tqdm import tqdm

FILE_NAME = "09_-_Prehled_dislokaci_0.csv"
SKIP_ROWS = 18

C_INSTITUTION = 0
C_ADMINISTRATOR = 1
C_PURPOSE = 2

C_IDENT = 3
C_CADASTRAL = 4

C_OWNERSHIP = 5
C_OWNER_SUBJECT = 6

C_TOTAL_SIZE = 7
C_TOTAL_SIZE_OFFICE = 8
C_TOTAL_SIZE_OTHER = 9

C_FREE_SIZE = 10
C_FREE_SIZE_OFFICE = 11
C_FREE_SIZE_OTHER = 12

C_PPL_WORKING = 18
C_AVG_SPACE_ON_WORKER = 14


def get_conn():
    return pymysql.connect(host=os.environ.get("NKU_DB_HOST"),
                           user=os.environ.get("NKU_DB_USER"),
                           password=os.environ.get("NKU_DB_PASSWD"),
                           db=os.environ.get("NKU_DB_DB"),
                           charset='utf8mb4',
                           cursorclass=pymysql.cursors.DictCursor)


def create_schema():
    schema = """
    CREATE TABLE `prehled_dislokaci` (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `instituce` VARCHAR(255),
    `admin` VARCHAR(255),
    `ucel` VARCHAR(255),
    `addresa` VARCHAR(255),
    `katastralni_uzemi` VARCHAR(255),
    `vlastnictvi` VARCHAR(255),
    `subjekt_s_vp` VARCHAR(255),
    `plocha_celkem` FLOAT(7,2),
    `plocha_celkem_kancelare` FLOAT(7,2),
    `plocha_celkem_volna` FLOAT(7,2),
    `plocha_volna` FLOAT(7,2),
    `plocha_volna_kancelare` FLOAT(7,2),
    `plocha_volna_volna` FLOAT(7,2),
    `zamestnancu` FLOAT(7,2),
    `plocha_na_zam` FLOAT(7,2),
    PRIMARY KEY (`id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin
    AUTO_INCREMENT=1 ; 
    """
    connection = get_conn()
    try:
        with connection.cursor() as cursor:
            cursor.execute("DROP TABLE IF EXISTS `prehled_dislokaci`;")
            cursor.execute(schema)

        connection.commit()
    finally:
        connection.close()


def insert(r):
    connection = get_conn()
    try:
        with connection.cursor() as cursor:
            for i, dig in enumerate(tqdm(r)):
                columns = ','.join(list(dig.keys()))
                values = str(list(dig.values()))[1:-1]
                cursor.execute(f"INSERT INTO prehled_dislokaci ({columns}) VALUES ({values});")
                if i % 50 == 0:
                    connection.commit()
        connection.commit()
    finally:
        connection.close()


def get_val(val):
    # ugly, but because of data...
    try:
        val = float(bytes(val.replace(u'\xa0', u'').replace(",", "."), 'unicode_escape').decode('ascii', 'replace'))
    except ValueError:
        return 0
    return val


def get_results():
    results = []
    with open(FILE_NAME, 'r') as csvfile:
        reader = csv.reader(csvfile, delimiter=";")
        admin = inst = None

        for i, row in enumerate(tqdm(reader)):
            # skip rows on the beginning
            if i < SKIP_ROWS:
                continue

            # skip those which does not have address
            if row[C_IDENT] is "":
                continue

            if row[C_INSTITUTION] is not "":
                inst = row[C_INSTITUTION]

            if row[C_ADMINISTRATOR] is not "":
                admin = row[C_ADMINISTRATOR]

            mysql_row = {
                "instituce": inst,
                "admin": admin,
                "ucel": row[C_PURPOSE],
                "addresa": row[C_IDENT],
                "katastralni_uzemi": row[C_CADASTRAL],
                "vlastnictvi": row[C_OWNERSHIP],
                "subjekt_s_vp": row[C_OWNER_SUBJECT],
                "plocha_celkem": get_val(row[C_TOTAL_SIZE]),
                "plocha_celkem_kancelare": get_val(row[C_TOTAL_SIZE_OFFICE]),
                "plocha_celkem_volna": get_val(row[C_TOTAL_SIZE_OTHER]),
                "plocha_volna": get_val(row[C_FREE_SIZE]),
                "plocha_volna_kancelare": get_val(row[C_FREE_SIZE_OFFICE]),
                "plocha_volna_volna": get_val(row[C_FREE_SIZE_OTHER]),
                "zamestnancu": get_val(row[C_PPL_WORKING]),
                "plocha_na_zam": get_val(row[C_AVG_SPACE_ON_WORKER]),
            }
            results.append(mysql_row)
    return results


if __name__ == '__main__':
    print("parsing CSV")
    results = get_results()
    print("total parsed", len(results))
    print("re-creating schema")
    create_schema()
    print("inserting into MySQL")
    insert(results)
