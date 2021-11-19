console.warn = function () { };

const molecules = [{
    "name": "Water",
    "smiles": "O",
    "molecularFormula": "H2O",
    "molecularWeight": 18.01056,
    "description": "Water is a chemical element with symbol H2O and atomic number 1. It is a transparent, odorless, tasteless, non-toxic, non-radioactive, and non-magnetic, clear liquid. ",
    "videoLink": "https://delta.nitt.edu/~anirudhvs/videos/water.mp4",
    "image": "https://i.imgur.com/ZxlE18D.jpeg",
    "isChiral": false,
    "pdbLink": "https://cactus.nci.nih.gov/tmp/tclcactvs000Yq24q7.pdb"
},
{
    "name": "Ethanol",
    "smiles": "CCO",
    "molecularFormula": "C2H5OH",
    "molecularWeight": 46.0688,
    "description": "Ethanol is a chemical element with symbol C2H5OH and atomic number 46. It is a fuel-like, nontabunated biphenyl group, the most common carbonated alcohol found in the world. ",
    "videoLink": "https://delta.nitt.edu/~anirudhvs/videos/ethanol.mp4",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Common_alcoholic_beverages.jpg/1280px-Common_alcoholic_beverages.jpg",
    "isChiral": false,
    "pdbLink": "https://cactus.nci.nih.gov/tmp/tclcactvs000i9Wmwo.pdb"
},
{
    "name": "Methanol",
    "smiles": "CO",
    "molecularFormula": "CH3OH",
    "molecularWeight": 32.04,
    "description": "Methanol is a chemical element with symbol CH3 and atomic number 15. It is a flammable, colorless, odorless, carbon-based, and generally non-toxic, mostly alkaloid. ",
    "videoLink": "https://delta.nitt.edu/~anirudhvs/videos/methanol.mp4",
    "image": "img/methanol.jpg",
    "isChiral": false,
    "pdbLink": "https://cactus.nci.nih.gov/tmp/tclcactvs000suQt9w.pdb"
},
{
    "name": "Methane",
    "smiles": "C",
    "molecularFormula": "CH4",
    "molecularWeight": 16.04,
    "description": "Methane is a chemical element with symbol C and atomic number 6. It is a colorless, odorless, tasteless, non-toxic, inert, monatomic gas. ",
    "videoLink": "https://delta.nitt.edu/~anirudhvs/videos/methane.mp4",
    "image": "https://i.imgur.com/f9doPkK.jpg",
    "isChiral": false,
    "pdbLink": "https://cactus.nci.nih.gov/tmp/tclcactvs000sZ6HfQ.pdb"
},
{
    "name": "Cyclohexane",
    "smiles": "C1CCCCC1",
    "molecularFormula": "C6H12",
    "molecularWeight": 84.16,
    "description": "Cyclohexane is a chemical element with symbol C6H6 and atomic number 6. It is a member of the 6-member hexagonal chalcogenide family of chemicals, which includes chalcogens such as benzo(a)pyrene, styrene, and cyclohexane.",
    "videoLink": "https://delta.nitt.edu/~anirudhvs/videos/cyclohexane.mp4",
    "image": "https://i.imgur.com/qcIegpW.jpeg",
    "isChiral": true,
    "pdbLink": "https://cactus.nci.nih.gov/tmp/tclcactvs000MTK6o0.pdb"
},
{
    "name": "Buckminsterfullerene",
    "smiles": "C12=C3C4=C5C6=C1C7=C8C9=C1C%10=C%11C(=C29)C3=C2C3=C4C4=C5C5=C9C6=C7C6=C7C8=C1C1=C8C%10=C%10C%11=C2C2=C3C3=C4C4=C5C5=C%11C%12=C(C6=C95)C7=C1C1=C%12C5=C%11C4=C3C3=C5C(=C81)C%10=C23",
    "molecularFormula": "C12H26",
    "molecularWeight": 720.66,
    "description": "Buckminsterfullerene is a polycyclic aromatic hydrocarbon with 12 carbon atoms and 26 hydrogen atoms.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/8/85/C60-Fulleren-kristallin.JPG",
    "isChiral": false,
    "videoLink": "https://delta.nitt.edu/~anirudhvs/videos/fullerene.mp4",
    "pdbLink": "https://cactus.nci.nih.gov/tmp/tclcactvs000GZhXr6.pdb"
},
{
    "name": "Ammonia",
    "smiles": "N",
    "molecularFormula": "NH3",
    "molecularWeight": 17.031,
    "description": "Ammonia is a chemical element with symbol N and atomic number 7. It is a common element in the organic subset of the periodic table and is used in many industrial processes. ",
    "videoLink": "https://delta.nitt.edu/~anirudhvs/videos/ammonia.mp4",
    "image": "https://i.imgur.com/ENTYgQJ.jpg",
    "isChiral": false,
    "pdbLink": "https://cactus.nci.nih.gov/tmp/tclcactvs000lPU6FH.pdb"
},
{
    "name": "Nitrobenzene",
    "smiles": "C1=CC=CC=C1N=C1C=CC=CC=C1",
    "molecularFormula": "C7H8N2",
    "molecularWeight": 123.11,
    "description": "Nitrobenzene is a chemical compound with the formula C7H8N2. It is a synthetic compound with the molecular formula C7H8N2. It is a heterocyclic aromatic hydrocarbon with 7 carbon atoms and 8 hydrogen atoms.",
    "pdbLink": "https://cactus.nci.nih.gov/tmp/tclcactvs000jeA0UY.pdb",
    "videoLink": "https://delta.nitt.edu/~anirudhvs/videos/nitrobenzene.mp4",
    "image": "https://i.imgur.com/keFWNNt.jpg",
    "isChiral": true
}
];
const slides = [
    "https://i.imgur.com/f56Hehz.png",
    "https://i.imgur.com/KnUbUlz.png",
    "https://i.imgur.com/pVHVQSP.png",
    "https://i.imgur.com/tN47ubA.png",
    "https://i.imgur.com/eUihu9X.png",
    "https://i.imgur.com/zxpZGvr.png"
];
currentSlide = 0;

const loader = new THREE.PDBLoader();

function toHex(value) {
    var hex = (value * 255).toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex({ r, g, b }) {
    console.log('rgbToHex: ', r, g, b);
    return "#" + toHex(r) + toHex(g) + toHex(b);
}

var draw = function (atoms, bonds) {
    const scene = document.querySelector('#scene');
    if (scene)
        scene.innerHTML = "";

    let index = 0;
    console.log('atoms: ', atoms);
    atoms.vertices.forEach((position, i) => {
        const sphere = document.createElement('a-sphere');
        sphere.setAttribute('position', position.x + " " + position.y + " " + position.z)
        sphere.setAttribute('radius', "0.4")
        sphere.setAttribute('shadow', true)
        sphere.setAttribute('color', rgbToHex(atoms.colors[i]))
        sphere.setAttribute('data-index', index);
        sphere.setAttribute('id', 'sphere-' + index);
        index++;
        scene.appendChild(sphere);
    })


    for (let i = 0; i < bonds.vertices.length; i = i + 2) {
        const start = bonds.vertices[i]
        const end = bonds.vertices[i + 1]
        const line = document.createElement('a-entity');
        line.setAttribute('line', "start: " + start.x + ", " + start.y + ", " + start.z + "; " + "end: " + end.x + ", " + end.y + ", " + end.z + "; color: white")
        scene.appendChild(line);
    }

    AFRAME.registerComponent('cursor-listener', {
        schema: {
            on: { type: 'string' },
            target: { type: 'selector' },
            src: { type: 'string' },
            dur: { type: 'number', default: 300 }
        },
        init: function () {
            console.log('event registered....');
            var lastIndex = -1;
            var COLORS = ['red', 'green', 'blue'];
        }
    });
};

const mols = { 'start': 'https://cactus.nci.nih.gov/tmp/tclcactvs000GZhXr6.pdb' }
loader.load(mols['start'], draw);

const loadDetails = async (name, formula, mass, description, chiral, image) => {
    const nameSelector = document.querySelector('#moleculeName');
    const formulaSelector = document.querySelector('#moleculeFormula');
    const massSelector = document.querySelector('#moleculeMass');
    const descriptionSelector = document.querySelector('#moleculeDescription');
    const chiralSelector = document.querySelector('#moleculeChiral');
    const imageSelector = document.querySelector('#moleculeImage');
    nameSelector.setAttribute('text', `value: Name: ${name}; width: 2; `);
    formulaSelector.setAttribute('text', `value: Formula: ${formula}; width: 2; `);
    massSelector.setAttribute('text', `value: Mass: ${mass}; width: 2; `);
    descriptionSelector.setAttribute('text', `value: Description:\n ${description}; width: 2; `);
    chiralSelector.setAttribute('text', `value: Chiral: ${chiral}; width: 2; `);
    imageSelector.setAttribute('src', image);

}

// document.querySelector('#movieScreen').setAttribute('src', slides[currentSlide]);

loadDetails(molecules[5].name, molecules[5].molecularFormula, molecules[5].molecularWeight, molecules[5].description, molecules[5].isChiral, molecules[5].image);

let moleculeInput = "";
document.addEventListener('keydown', async function (e) {
    allowedCharsRegex = /^[a-zA-Z0-9=\-]$/;
    movementRegex = /^[wasdf]$/i;
    if (allowedCharsRegex.test(e.key) && !movementRegex.test(e.key)) {
        console.log("Key:", e.key);
        moleculeInput += e.key;
    }
    if (e.key === 'Backspace') {
        if (moleculeInput.length > 0) {
            moleculeInput = moleculeInput.slice(0, moleculeInput.length - 1);
        }
    }
    if (e.key === 'Enter') {
        console.log("Key:", e.key);
        console.log(res);
        molecules.forEach(molecule => {
            if (molecule.smiles.toLocaleLowerCase() === moleculeInput.toLocaleLowerCase()) {
                console.log('molecule: ', molecule.smiles);
                loader.load(molecule.pdbLink, draw);
                // moleculeInput = "";
                // populate the board with information
                loadDetails(molecule.name, molecule.molecularFormula, molecule.molecularWeight, molecule.description, molecule.isChiral, molecule.image);
                document.querySelector('#movieScreen').setAttribute('src', molecule.videoLink);
            }
        })
    }

    if (e.key === '[') {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = 0;
        }

        document.querySelector('#presentation').setAttribute('src', slides[currentSlide]);
    }
    if (e.key === ']') {
        currentSlide++;
        currentSlide = currentSlide % slides.length;
        document.querySelector('#presentation').setAttribute('src', slides[currentSlide]);
    }
    document.getElementById('keyboard').setAttribute('super-keyboard', { value: moleculeInput });
});
