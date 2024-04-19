import ReceiptLogo from "@/assets/receipt-logo.png";

const Receipt = (
    <div className="receipt flex w-80 flex-col bg-white gap-1 items-center border p-1">
      <div className='w-[60%]'>
        <img src={ReceiptLogo} alt="logo" className='w-full'/>
      </div>
      <div className='flex flex-col items-center border-dotted w-full border-b-4 border-black'>
        <p className='font-bold text-sm'>Chek: 00000000012</p>
        <p className='text-sm'>Sana: 12.12.12 15:15:15</p>
        <p>Sotuvchi: Alijon Alijon</p>
        <p className='font-bold'>Sotuvchi</p>
      </div>
      <div className='flex flex-col w-full'>
        <div className='flex flex-col'>
          <p className='font-bold'>1. Qizil olma</p>
          <p className='font-bold self-end'>2kg x 10.000 = 20.0000</p>
        </div>
        <div className='flex flex-col'>
          <p className='font-bold'>1. Qizil olma</p>
          <p className='font-bold self-end'>2kg x 10.000 = 20.0000</p>
        </div>
      </div>
    </div>
  )
export default Receipt;
