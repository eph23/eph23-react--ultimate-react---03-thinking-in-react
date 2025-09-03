function Stats({ items }) {
    if (!items.length) {
        return (
            <footer className="stats">
                <em>Start adding some items to the list 🚀</em>
            </footer>
        );
    }

    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const percentage = Math.round((numPacked / numItems) * 100);

    return (
        <footer className="stats">
            <em>
                {percentage === 100
                    ? "You got everything ready to go ✈"
                    : `You have ${numItems} Items in your list and you already packed
                ${numPacked} (${percentage}%)`}
            </em>
        </footer>
    );
}

export default Stats;
