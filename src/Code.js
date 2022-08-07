const doGet = () => {
    const response = [{ status: 'cool' }];

    return ContentService.createTextOutput(JSON.stringify(response)).setMimeType(ContentService.MimeType.JSON);
};
