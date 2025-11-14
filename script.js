const visitasRef = db.ref("estadisticas/visitas");
const likesRef = db.ref("estadisticas/likes");

visitasRef.transaction(current => (current || 0) + 1);

visitasRef.on("value", snapshot => {
  document.getElementById("visitas").textContent = snapshot.val();
});

likesRef.on("value", snapshot => {
  document.getElementById("likes").textContent = snapshot.val();
});

function incrementarLikes() {
  likesRef.transaction(current => (current || 0) + 1);
}