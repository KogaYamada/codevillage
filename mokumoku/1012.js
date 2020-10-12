const planeMaterial = [
  { name: 'kona', ryou: 123 },
  { name: 'kome', ryou: 12345 },
];
const kuroMaterial = [
  { name: 'kona', ryou: 123 },
  { name: 'kome', ryou: 12345 },
];

const material = {
  plane: [
    { name: 'kona', ryou: 123 },
    { name: 'kome', ryou: 12345 },
  ],
  kuro: [
    { name: 'kona', ryou: 123 },
    { name: 'kome', ryou: 12345 },
  ],
};
const container = document.getElementById('container');
const selector = document.getElementById('selector');
const kind = 'kuro';

selector.addEventListener('change', (event) => {
  kind = event.target.value;
  kuroMaterial.forEach((material) => {
    const tr = document.createElement('tr');
    const tdMaterial = document.createElement('td');
    const tdAmount = document.createElement('td');

    tdMaterial.textContent = material.name;
    tdAmount.textContent = material.ryou;

    tr.appendChild(tdMaterial);
    tr.appendChild(tdAmount);

    container.appendChild(tr);
  });
});
