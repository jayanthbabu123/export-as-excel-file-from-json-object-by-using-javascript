
const data = [{
    "Segment": "Government",
    "Country": "Canada",
    "Product": "Carretera",
    "Discount": "None",
},
{
    "Segment": "Government",
    "Country": "Germany",
    "Product": "Carretera",
    "Discount": "None",
},
{
    "Segment": "Midmarket",
    "Country": "France",
    "Product": "Carretera",
    "Discount": "None",
}];
document.getElementById("json").innerHTML = JSON.stringify(data, undefined, 4);

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

function downloadAsExcel(){
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = {
        Sheets: {
            'data' : worksheet
        },
        SheetNames: ['data']
    };
    const excelBuffer = XLSX.write(workbook, {bookType: 'xlsx', type: 'array'});
    console.log(excelBuffer);
    saveAsExcel(excelBuffer, 'data_template');
}

function saveAsExcel(buffer, filename){
    const data = new Blob([buffer], {type: EXCEL_TYPE});
    saveAs(data, filename+EXCEL_EXTENSION);
}







