const wrapper = document.querySelector(".wrapper"),
    list = wrapper.querySelector("#list");

const footer = document.querySelector("footer");

const jsonstr = 'https://random-data-api.com/api/v2/users?size=20';


const getData = () => {
    fetch(jsonstr)
        .then((resp) => resp.json())
        .then(data => {
            console.log(data);
            data.map(({ uid, first_name, last_name }) => console.log(`${uid}\t${first_name}\t${last_name}`));
            list.innerHTML = data.map(({ uid, first_name, last_name, email }) => {
                return `<li data-uid=${uid} style="background: hsl(${Math.floor(Math.random() * 361)}, 80%, 20%)";});>
                        <p>${first_name}<p/>
                        <p>${last_name}<p/>
                        <p>${email}<p/>
                    </li>`
            }).join(' ');
        }).catch(console.warn)
}

getData();

footer.addEventListener("click", () => console.log("Footing"));

window.addEventListener('load', () => {
    footer.innerHTML = `<p>Copyright &copy; ${new Date().getFullYear()}</p>`
})