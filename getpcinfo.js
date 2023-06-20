var obj_csv = {
    size:0,
    dataFile:[]
};
 
function readImage(input) {
    console.log(input)
    if (input.files && input.files[0]) {
        let reader = new FileReader();
        reader.readAsBinaryString(input.files[0]);
        reader.onload = function (e) {
            console.log(e);
            obj_csv.size = e.total;
            obj_csv.dataFile = e.target.result
            // console.log(obj_csv.dataFile)
            parseData(obj_csv.dataFile)
        }
    }
}
 
function parseData(data){
    let csvData = [];
    let lbreak = data.split("\n");
    lbreak.forEach(res => {
        csvData.push(res.split(","));
    });
    console.table(csvData);

    let pcMobo = document.getElementById('mobo');
    let pcCPU = document.getElementById('cpu');
    let pcRam = document.getElementById('ram');
    let ramMod1 = document.createElement('option');
    let ramMod2 = document.createElement('option');
    let pcHdd = document.getElementById('hdd');
    let pcGpu = document.getElementById('gpu');
    let gpu1 = document.createElement('option');
    let gpu2 = document.createElement('option');


    // var str = JSON.stringify(csvData[0,4]);
    // var str_trim = str;

    // alert(str.replace(/\\u([0-9]|[a-fA-F])([0-9]|[a-fA-F])([0-9]|[a-fA-F])([0-9]|[a-fA-F])/g, ""));
    // console.log(str_trim.replace('\u0000',''));


    function removeNulls(myCsvData) {
        let str = JSON.stringify(myCsvData);
        let str_cleaned = str.replace(/\\u([0-9]|[a-fA-F])([0-9]|[a-fA-F])([0-9]|[a-fA-F])([0-9]|[a-fA-F])/g, "");
        let super_cleaned = str_cleaned.replace('["','');
        let result = super_cleaned.replace('\\r"]','');
        return result;
    }

    pcMobo.value += removeNulls(csvData[0,4]);
    pcCPU.value += removeNulls(csvData[0,6]);
    ramMod1.text = removeNulls(csvData[0,10]);
    pcRam.add(ramMod1);
    ramMod2.text = removeNulls(csvData[0,11]);
    pcRam.add(ramMod2);
    pcHdd.value += removeNulls(csvData[0,8]);
    gpu1.text = removeNulls(csvData[0,13])
    pcGpu.add(gpu1);
    gpu2.text = removeNulls(csvData[0,14])
    pcGpu.add(gpu2);



}
