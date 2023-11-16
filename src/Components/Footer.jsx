
export default function Footer() {

    const footerStyle = {
        backgroundColor: "hsl(217, 19%, 24%)",
    };
    
    return (
        <div className="w-full">
            <footer className="text-white py-1 footer" style={footerStyle}>
                <div className="container mx-auto text-center flex justify-center">
                <p className="text-sm md:text-base lg:text-lg">
                    Challenge by Frontend Mentor
                </p>
                <p className="text-sm md:text-base lg:text-lg ml-2">
                    Coded by Calvin Mwangi🙂
                </p>
                </div>
            </footer>
        </div>
    );
}
