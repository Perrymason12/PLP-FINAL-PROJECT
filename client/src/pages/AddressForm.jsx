import React, { useEffect, useState } from 'react'
import CartTotal from '../components/CartTotal'
import Title from '../components/Title'
import toast from 'react-hot-toast'
import { useAppContext } from '../context/AppContext'
import { api } from '../utils/api'

const AddressForm = () => {
  const {navigate, user, getToken, loadAddresses} = useAppContext()
  const [address, setAddress]= useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipCode:"",
    country:"",
    phone:""
  })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (user) {
      setAddress(prev => ({
        ...prev,
        email: user.primaryEmailAddress?.emailAddress || "",
        firstName: user.firstName || "",
        lastName: user.lastName || ""
      }))
    }
  }, [user])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!address.firstName || !address.lastName || !address.email || !address.phone || 
        !address.street || !address.city || !address.state || !address.zipCode || !address.country) {
      toast.error("Please fill all fields")
      return
    }

    setLoading(true)
    try {
      const token = await getToken()
      const data = await api.addAddress(address, token)
      if (data.success) {
        toast.success("Address added successfully!")
        loadAddresses()
        navigate('/cart')
      }
    } catch (error) {
      toast.error(error.message || "Failed to add address")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='max-padd-container py-16 pt-28 bg-primary'>
      {/*Container */}
      <div className='flex flex-col xl:flex-row gap-8 xl:gap-28'>
        {/*Left side */}
        <form onSubmit={handleSubmit} className='flex flex-2 flex-col gap-3 text-[95%] w-full'>
          <Title title1={"Delivery"} title2={"Information"} titleStyles={"pb-5"}/>
          <div className='flex flex-col sm:flex-row gap-3'>
            <input value={address.firstName} onChange={(e) => setAddress({...address, firstName: e.target.value})} type="text" placeholder='First Name' name='firstName' className='ring-1 ring-slate-900/15 p-2 pl-3 rounded-sm bg-white outline-none flex-1' required/>

            <input value={address.lastName} onChange={(e) => setAddress({...address, lastName: e.target.value})} type="text" placeholder='Last Name' name='lastName' className='ring-1 ring-slate-900/15 p-2 pl-3 rounded-sm bg-white outline-none flex-1' required/>
          </div>

          <input value={address.email} onChange={(e) => setAddress({...address, email: e.target.value})} type="email" placeholder='Email' name='email' className='ring-1 ring-slate-900/15 p-2 pl-3 rounded-sm bg-white outline-none w-full' required/>

          <input value={address.phone} onChange={(e) => setAddress({...address, phone: e.target.value})} type="text" placeholder='Phone Number' name='phone' className='ring-1 ring-slate-900/15 p-2 pl-3 rounded-sm bg-white outline-none w-full' required/>

          <input value={address.street} onChange={(e) => setAddress({...address, street: e.target.value})} type="text" placeholder='Street' name='street' className='ring-1 ring-slate-900/15 p-2 pl-3 rounded-sm bg-white outline-none w-full' required/>

          <div className='flex flex-col sm:flex-row gap-3'>
            <input value={address.city} onChange={(e) => setAddress({...address, city: e.target.value})} type="text" placeholder='City' name='city' className='ring-1 ring-slate-900/15 p-2 pl-3 rounded-sm bg-white outline-none flex-1' required/>

            <input value={address.state} onChange={(e) => setAddress({...address, state: e.target.value})} type="text" placeholder='State' name='state' className='ring-1 ring-slate-900/15 p-2 pl-3 rounded-sm bg-white outline-none flex-1' required/>
          </div>

          <div className='flex flex-col sm:flex-row gap-3'>
            <input value={address.zipCode} onChange={(e) => setAddress({...address, zipCode: e.target.value})} type="text" placeholder='Zip Code' name='zipCode' className='ring-1 ring-slate-900/15 p-2 pl-3 rounded-sm bg-white outline-none flex-1' required/>

            <input value={address.country} onChange={(e) => setAddress({...address, country: e.target.value})} type="text" placeholder='Country' name='country' className='ring-1 ring-slate-900/15 p-2 pl-3 rounded-sm bg-white outline-none flex-1' required/>
          </div>

          <button type='submit' disabled={loading} className='btn-dark rounded-md w-full sm:w-1/2 mt-2'>
            {loading ? "Adding..." : "Add Address"}
          </button>
        </form>
        {/*Right side */}
        <div className='flex flex-1 flex-col'>
          <div className='max-w-[379px] w-full bg-white p-5 py-10 max-md:mt-16 rounded-xl'>
            <CartTotal />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddressForm
