import pandas as pd

def createFullName(row):
    if row['MIDDLE_INITIAL'].isna():
        row['MIDDLE_INITIAL'] = ' '
    return (str(row['FIRST_NAME']) + ' ' + str(row['MIDDLE_INITIAL']) + ' ' + str(row['LAST_NAME']))

lobbyistDf = pd.read_csv('./data/Lobbyist_Data_-_Lobbyists.csv').drop_duplicates().drop(columns=['SALUTATION'])

lobbyistDf['FULL_NAME'] = lobbyistDf.apply(lambda row: createFullName(row), axis=1)

lobbyistDf = lobbyistDf.drop_duplicates(subset=['FULL_NAME'])

groupedByID = lobbyistDf.groupby(['LOBBYIST_ID']).count()

# Step 1: Get IDs where there are more than 1 names assigned to it
duplicateIDs = groupedByID[groupedByID['FULL_NAME'] != 1]['FULL_NAME']

# Step 2: Take list of duplicateIDs, and see if they are distinct or not. Determine this by looking to see if either ADDRESS1,
# EMAIL, PHONE, or FAX are identical
for id in list(duplicateIDs.index):








