// Centraliza o mapa em Paraíso do Tocantins
const map = L.map('map').setView([-10.1754, -48.8826], 13);

// Adiciona camada de mapa (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contribuidores'
}).addTo(map);

// Lista de pontos de coleta em Paraíso do Tocantins (exemplo)
const locais = [
    {
      nome: "IFTO - Campus Paraíso do Tocantins",
      coords: [-10.268419882390617, -48.88779698595789],
      descricao: " BR 153, KM 480 - Distrito Agroindustrial, Paraíso do Tocantins - TO, 77600-000"
    },
    {
      nome: "UNEST - União Educacional do Médio Tocantins",
      coords: [-10.15593075416065, -48.88337712000279],
      descricao: "Av. Transbrasiliana, 2625 - Vila Milena, Paraíso do Tocantins - TO, 77600-000"
    },
    {
      nome: "Escola Estadual Deusa Moraes",
      coords: [-10.17403002984893, -48.88356999192142],
      descricao: "R. Voluntários da Pátria, 950 - Centro, Paraíso do Tocantins - TO, 77600-000"
    },
    {
      nome: "Camil Alimentos",
      coords: [-10.253997906985816, -48.87950493320267],
      descricao: "Rodovia Br 153, Km 484, Paraiso do Tocantins - TO, 77.600-000"
    },
    {
      nome: "Farma Coelho",
      coords: [-10.1760, -48.8810],
      descricao: "Av. 23 de Outubro, 1021 - St. Pouso Alegre, Paraíso do Tocantins - TO, 77600-000"
    },
    {
      nome: "Paróquia São José Operário",
      coords: [-10.177932289914384, -48.88631305939733],
      descricao: "Rua Tapajós, 665 - St. Oeste, Paraíso do Tocantins - TO, 77600-000"
    },
    {
      nome: "Plena Alimentos",
      coords: [-10.24856924557433, -48.87718372228576],
      descricao: "Rod. BR-153, Km 493, S/n - Setor Industrial, Paraíso do Tocantins - TO, 77600-000"
    },
    {
      nome: "Remo Materiais de Construção",
      coords: [-10.177689909851125, -48.88350001892295],
      descricao: "Av. Castelo Branco, 800 - Centro, Paraíso do Tocantins - TO, 77600-000"
    },
    {
      nome: "Vivo - Loja Paraíso do Tocantins",
      coords: [-10.173097645330904, -48.8851692747422],
      descricao: "Avenida Castelo Branco, 1457 Quadra 24 - Lote 08 - Sala 01 - Térreo - Centro, Paraíso do Tocantins - TO, 77600-000"
    },
    {
      nome: "Câmara Municipal de Vereadores",
      coords: [-10.17469304028881, -48.883784700039435],
      descricao: "Prédio púb Palácio Zeca Moraes - Av. Bernardo Sayão, 800 - Centro, Paraíso do Tocantins - TO, 77600-000"
    },
    {
      nome: "Secretaria Municipal de Educação",
      coords: [-10.194488453053795, -48.8914093731235],
      descricao: "Rua 57 - St. Pouso Alegre, Paraíso do Tocantins - TO, 77600-000"
    },
    {
      nome: "Secretaria Municipal de Infraestrutura",
      coords: [-10.176442878548595, -48.88104725909639],
      descricao: "Av. Transbrasiliana, nº 335, Centro, Paraíso do Tocantins - TO, 77600-000"
    },
    {
      nome: "Secretaria Municipal de Saúde",
      coords: [-10.170025275793911, -48.88442059271212],
      descricao: "Rua Alfredo Nasser, nº 843, Centro, Paraíso do Tocantins - TO, 77600-000"
    },
    {
      nome: "Secretaria Municipal de Meio Ambiente",
      coords: [-10.170255005342716, -48.881626702296224],
      descricao: "Rua Bernardino Maciel, nº 88, Paraíso do Tocantins - TO, 77600-000" 
    },
    {
      nome: "Prefeitura Municipal de Paraíso do Tocantins",
      coords: [-10.17656427003897, -48.88104958254585],
      descricao: "Av. Transbrasiliana, 335 - Centro, Paraíso do Tocantins - TO, 77600-000"
    },
    {
      nome: "Hospital Regional de Paraíso",
      coords: [-10.181276102367892, -48.903272357981535],
      descricao: "Rua 03, Quadra 02, Lotes 01 ao 19, Setor Aeroporto, Paraíso do Tocantins - TO, 77600-000"
    },
    {
      nome: "Teatro Municipal Cora Coralina",
      coords: [-10.1810, -48.8865],
      descricao: "Palácio da Cultura Cora Coralina, R. 13 de Maio - Centro, Paraíso do Tocantins - TO, 77600-000"
    }
  
];

// Adiciona marcadores no mapa
locais.forEach(local => {
  L.marker(local.coords).addTo(map)
    .bindPopup(`<b>${local.nome}</b><br>${local.descricao}`);
});