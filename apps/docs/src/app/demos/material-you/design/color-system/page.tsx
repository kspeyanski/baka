export default async function Page() {
    return (
        <div>
            {['primary', 'secondary', 'tertiary', 'error'].map((color) => (
                <div key={color} className={`bg-${color} text-on-${color}`}>
                    {color}
                </div>
            ))}
        </div>
    )
}