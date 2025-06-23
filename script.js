document.addEventListener("DOMContentLoaded", () => {
  const perfumeForm = document.getElementById('perfumeForm');
  const result = document.getElementById('result');

  const ingredients = {
    花香: ["玫瑰", "茉莉", "水仙"],
    果香: ["柑橘", "佛手柑", "青蘋果"],
    木質: ["檀香", "雪松", "廣藿香"],
    清新: ["薄荷", "綠茶", "海風"]
  };

  const getRandom = arr => arr[Math.floor(Math.random() * arr.length)];
  const getUniqueThree = arr => {
    const top = getRandom(arr);
    const middle = getRandom(arr.filter(i => i !== top));
    const base = getRandom(arr.filter(i => i !== top && i !== middle));
    return { top, middle, base };
  };

  perfumeForm.addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    if (!name) return alert("請為這支香水命名！");
    const style = document.getElementById('style').value;
    const arr = ingredients[style];
    const { top, middle, base } = getUniqueThree(arr);

    result.innerHTML = `
      <div class="card">
        <h2>「${name}」香水配方</h2>
        <p><strong>Top:</strong> ${top} — 1.5 g</p>
        <p><strong>Middle:</strong> ${middle} — 2 g</p>
        <p><strong>Base:</strong> ${base} — 1 g</p>
        <p><em>總共4.5 g，開始調配你的專屬氣味吧！</em></p>
      </div>`;
  });
});
