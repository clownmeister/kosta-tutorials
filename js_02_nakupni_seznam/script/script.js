

const vegetables = [
    {name: 'onion', price: 50, available: 10},
    {name: 'broccoli', price: 40, available: 15},
    {name: 'cabbage', price: 30, available: 0},
    {name: 'celery', price: 35, available: 12},
    {name: 'dill', price: 15, available: 48},
    {name: 'potato', price: 45, available: 54},
    {name: 'carrot', price: 55, available: 10},
    {name: 'tomato', price: 56, available: 100},
    {name: 'garlic', price: 35, available: 10},
    {name: 'pepper', price: 65, available: 10}
]

function createHtmlFromVegetableData(vegetable) {
    return `
    <tr>
        <th>${vegetable.name}</th>
        <td>${vegetable.price}Kč</td>
        <td>${vegetable.available}ks</td>
        <td class="table__actions">
            <div class="input-group">
                <span class="input-group-text">ks</span>
                <input type="number" class="form-control" aria-label="Počet kusů" value="1" id="vegetable-item">
            <button type="button" class="btn btn-success" data-bs-toggle="modal" onclick="addToCart()"  data-bs-target="#exampleModal">Koupit</button>
            </div>
        </td>
    </tr>
    `
}


// Toto bude napárované na button
function renderVegetableList() {
    let parent = document.getElementById('vegetable-list')

    for (const item of vegetables){
        const html = createHtmlFromVegetableData(item)
        parent.innerHTML = parent.innerHTML + html
    }
}

renderVegetableList()

//



