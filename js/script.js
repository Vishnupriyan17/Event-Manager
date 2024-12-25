function EmptyValues()
{
    let form = document.getElementById('input-form');
    form.reset();
}
function AddEvent()
{
    const Event = document.getElementById('Event-name').value;
    const Sdate = document.getElementById('Start-date').value;
    const Edate = document.getElementById('End-date').value;
    if (!Event || !Sdate || !Edate) {
        alert('Please fill in all fields!');
        return;
    }
    else{
    let show = document.createElement('div');
    show.classList.add('display');
    show.style.border='2px solid grey';
    show.style.display='flex';
    show.style.gap='15px';
    let check = document.createElement('input');
    check.type='checkbox';
    let EventElement = document.createElement('p');
    EventElement.innerHTML=`Event-Name: ${Event}`;
    let StartElement = document.createElement('p');
    StartElement.innerHTML=`Start-Date: ${Sdate}`;
    let EndElement = document.createElement('p');
    EndElement.innerHTML=`End-Date: ${Edate}`;
    show.append(check);
    show.append(EventElement);
    show.append(StartElement);
    show.append(EndElement);
    let MainElement = document.getElementById('display');
    MainElement.append(show);
    EmptyValues();
    }
}
