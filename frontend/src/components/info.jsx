function Info({ data, text }) {
    if (!Array.isArray(data) || data.length === 0) return null;

    return (
        <p className="text-2xl mb-2">
            {text} :{" "}
            {data.map((item, index) => (
                <span key={index}>
                    {index > 0 && " - "}
                    {item.first_name}
                </span>
            ))}
        </p>
    );
}

export { Info };
