import lightNightBtn from '../assets/icon/lightNightBtn.svg';

export const Footer = () => {
    return (
        <footer className="bg-[#303240] border-solid border-[0.063rem] border-[#717389] p-8 mt-8 flex flex-col items-start tablet:flex tablet:flex-row justify-between w-full gap-6">
            <div className="flex items-center gap-8">
                <p>©2024 “Dutie”</p>
                <button className="hidden tablet:flex items-center gap-2">
                    <img src={lightNightBtn} alt="" />
                    <p>Switch to Light Theme</p>
                </button>
            </div>
            <div className="flex flex-col items-start gap-4 tablet:flex tablet:flex-row tablet:items-center tablet:gap-8 ">
                <div className="border-r-[0px]  flex items-center gap-6  border-solid border-[0] tablet:border-r-[1px]  border-[#717389] pr-6">
                    <a href="">Telegram</a>
                    <a href="">Discord</a>
                </div>

                <a href=""> User Agreement</a>
            </div>
        </footer>
    );
};
