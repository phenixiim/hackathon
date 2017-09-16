"""
kombinace nezamestnanosti do jednoho CSV
- prida sloupec date, rrrr-mm-dd
"""
import pandas as pd

file_names = ["NEZ01_data_2015.csv", "NEZ01_data_2016.csv", "NEZ01_data_201708 2.csv"]

df = pd.concat([pd.read_csv(f) for f in file_names])  # type: pd.DataFrame

df["date"] = df["rok"].astype(str)+"-"+df["mesic"].apply('{:02d}'.format)+"-01"

df.to_csv("nezam_combined.csv")
