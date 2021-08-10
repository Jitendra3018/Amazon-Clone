import { GlobeAltIcon } from "@heroicons/react/outline";
import Image from "next/image";

function Footer() {
    return (
        <div>
            {/* ExtraLight Section */}
            <div className="bg-amazon_blue-extralight text-white p-5 flex items-center justify-center text-lg cursor-pointer">
                Back to Top
            </div>

            {/* Light Section */}
            <div className="bg-amazon_blue text-white h-auto pb-10">
                {/* Categories */}
                <div className="grid pl-28 mx-auto pb-14 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="sec">
                        <h2 className="font-bold text-xl mb-5">
                            Get to Know us
                        </h2>
                        <div className="font-light para">
                            <p>About Us</p>
                            <p>Carrers</p>
                            <p>Press Releases</p>
                            <p>Amazon Cares</p>
                            <p>Gift a Smile</p>
                        </div>
                    </div>

                    <div className="sec">
                        <h2 className="font-bold text-xl mb-5">
                            Connect with Us
                        </h2>
                        <div className="font-light para">
                            <p>Facebook</p>
                            <p>Twitter</p>
                            <p>Instagram</p>
                        </div>
                    </div>

                    <div className="sec">
                        <h2 className="font-bold text-xl mb-5">
                            Make Money with Us
                        </h2>
                        <div className="font-light para">
                            <p>Sell on Amazon</p>
                            <p>Sell under Amazon Accelerator</p>
                            <p>Amazon Global Selling</p>
                            <p>Become an Affiliate</p>
                            <p>Fullfilment by Amazon</p>
                            <p>Advertise your Products</p>
                            <p>Amazon Pay by Merchants</p>
                        </div>
                    </div>

                    <div className="sec">
                        <h2 className="font-bold text-xl mb-5">
                            Let us Help You
                        </h2>
                        <div className="font-light para">
                            <p>COVID-19 and Amazon</p>
                            <p>Your Account</p>
                            <p>Returns Center</p>
                            <p>100% Purchase Protection</p>
                            <p>Amazon App Download</p>
                            <p>Amazon Assistant Download</p>
                            <p>Help</p>
                        </div>
                    </div>
                </div>

                {/* Break */}
                <div className="h-25 w-full border-t opacity-25 pb-10" />

                {/* Languages */}
                <div className="mt-2 gap-10 flex flex-col items-center justify-center flex-grow sm:flex-grow-0 sm:flex-row sm:gap-20 md:gap-40">
                    <Image
                        src="https://links.papareact.com/f90"
                        width={150}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer flex items-center"
                    />

                    <div className="flex items-center gap-3 border rounded-sm p-2 w-48">
                        <GlobeAltIcon className="h-6 font-light" />
                        <p>English</p>
                    </div>
                </div>

                {/* Countries */}
                <div className="justify-center text-center">
                    <div className="hidden lg:flex justify-center text-center countries mt-10">
                        <p>Australia</p>
                        <p>Brazil</p>
                        <p>Canada</p>
                        <p>China</p>
                        <p>France</p>
                        <p>Germany</p>
                        <p>Italy</p>
                        <p>Japan</p>
                        <p>Mexico</p>
                        <p>Netherlands</p>
                        <p>Poland</p>
                        <p>Singapore</p>
                        <p>Spain</p>
                        <p>Turkey</p>
                    </div>
                    <br />
                    <div className="hidden lg:flex justify-center countries -mt-5">
                        <p>United Arab Emirates</p>
                        <p>United Kingdom</p>
                        <p>United States</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
