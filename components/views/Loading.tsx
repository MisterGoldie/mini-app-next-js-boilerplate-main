export default function Loading() {
    return (
        <>
            <div className={`m-auto overflow-hidden flex flex-col max-w-[400px] border-2 border-zinc-800/20  rounded-2xl bg-zinc-800/10 relative  max-h-[600px] w-full h-full`}>
                <div className='relative z-10 p-3  w-full h-full flex flex-col justify-between items-center gap-4'>
                    <div className='w-full h-full flex justify-center items-center text-white'>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width='32px' height='32px' viewBox="0 0 24 24" className='animate-spin'><path fill="currentColor" d="M 12 2 C 6.824 2 2.5537813 5.954 2.0507812 11 L 4.0683594 11 C 4.5633594 7.06 7.928 4 12 4 C 16.072 4 19.436641 7.06 19.931641 11 L 21.949219 11 C 21.445219 5.954 17.176 2 12 2 z M 2.0507812 13 C 2.2507813 15.008 3.0545781 16.837359 4.2675781 18.318359 L 5.6875 16.898438 C 4.8295 15.792438 4.2513594 14.457 4.0683594 13 L 2.0507812 13 z M 18.271484 16.929688 C 17.857484 17.454687 17.385469 17.932844 16.855469 18.339844 L 17.867188 20.074219 C 18.680187 19.483219 19.398953 18.769797 20.001953 17.966797 L 18.271484 16.929688 z M 7.1035156 18.310547 L 5.6816406 19.732422 C 6.9876406 20.801422 8.5659219 21.549563 10.294922 21.851562 L 10.4375 19.839844 C 9.2005 19.591844 8.0645156 19.059547 7.1035156 18.310547 z M 15.130859 19.351562 C 14.294859 19.708562 13.384641 19.928469 12.431641 19.980469 L 12.289062 21.986328 C 13.661062 21.947328 14.960625 21.621031 16.140625 21.082031 L 15.130859 19.351562 z"></path></svg>
                    </div>
                </div>
            </div>
        </>
    )
}