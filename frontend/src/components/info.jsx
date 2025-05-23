function Info(data, text) {
    return (
        <p className='text-2xl'>{text} : {" "}
            {data.correctors.map((author, index) => (
                <span key={index}>
                    {index > 0 && ' - '}
                    {author.first_name}
                </span>
            ))}
        </p>
    );
}