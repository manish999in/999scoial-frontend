import React, { useEffect } from 'react'

function Notifications() {

  const getNotifaction = async () => {
    const token = localStorage.getItem("token");
    console.log(token);
    try {
      const res = await fetch('https://nine99social.onrender.com/api/notifications', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      const data = await res.json();
      console.log("notifications ", data);
    } catch (error) {
      console.error("notifications ", error)
    }
  }

  useEffect(() => {
    getNotifaction()
  }, [])




  return (
    <div>
      Notifications page / api / notifications
    </div >
  )
}

export default Notifications
