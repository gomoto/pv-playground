var parent = document.getElementById('viewer');
var viewer = pv.Viewer(parent, {
  width: 600,
  height: 600,
  quality: 'high',
  antialias: true
});
pv.io.fetchPdb('4ins.pdb', function(structure) {
  console.log(structure);
  viewer.on('viewerReady', function() {
    //process atoms
    // structure.eachAtom(function(atom) {
    //   console.log(1, atom.element());
    //   console.log(2, atom.index());
    // });

    structure.eachResidue(function(residue) {
      console.log('num',residue.num());
      console.log('name',residue.name());
      console.log('index',residue.index());
      console.log('chain',residue.chain().name());
      console.log('---');
    });


    // var full = structure.select({rnums: [12,13,14,15]});
    // var outside = structure.select({rnums: [12,15]});
    // var inside = structure.select({rnums: [13,14]});
    // var ligand = structure.select({rnames : ['RVP', 'SAH', 'ALA']});
    // viewer.ballsAndSticks('full', full);
    // viewer.cartoon('inside', inside);
    // viewer.cartoon('outside', outside);
    // display the whole protein as cartoon
    viewer.cartoon('protein', structure);
    viewer.autoZoom();

  });
});
