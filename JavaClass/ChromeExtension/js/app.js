let myLeads = [];
const $input_el = document.getElementById('input-el');
const $input_btn = document.getElementById('input-btn');
const $ul_el = document.getElementById('ul-el');
const $delete_btn = document.getElementById('delete-btn');
const $tab_btn = document.getElementById('tab-btn');

// localStorage.setItem('myKey','myvalue.com')
// console.log(localStorage.getItem('myKey'))
// localStorage.clear()
// this is a const because we don't have to reassign it
const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'))
console.log("my leads from local storge: " + leadsFromLocalStorage)

// verifico gracios a truthy or falsy values if i have something in my local storage and then i call the render method to see the value
if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}


$tab_btn.addEventListener('click', () => {

    //the "chrome.tabs" is a function that only works when we deploy the extension, this is why we geet an error message
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify( myLeads ))
        render(myLeads)
    })

})

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li class="li-el">
                <a class="a-el" target="_blank" href='${leads[i]}'>
                    ${leads[i]}
                <a>
            </li>
        `
    }
    $ul_el.innerHTML = listItems;
}

$delete_btn.addEventListener("dblclick", function clearLocalStorage() {
    localStorage.clear()
    // clearing the array that contains all that we save 
    myLeads = []
    render(myLeads)
    console.log(myLeads)
})

$input_btn.addEventListener("click", function (){
    myLeads.push($input_el.value);
    $input_el.value = ""
    localStorage.setItem('myLeads', JSON.stringify(myLeads))
    render(myLeads)
})


