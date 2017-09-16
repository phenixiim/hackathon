"""
group okresnich mist a jejich pocet
- out: okres_kod_group.csv
"""

import pandas as pd

pd.DataFrame.from_csv("adresni-mista-vazby-cr.csv", sep=";").groupby("OBEC_KOD").size().to_csv("okres_kod_group.csv")
