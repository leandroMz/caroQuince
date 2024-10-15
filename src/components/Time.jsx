import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Styles from './Time.module.css';
export const Time = () => {
  const targetDate = new Date('2023-11-23T21:00:00'); 

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date();
    const difference = targetDate - now;
    
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSetReminder = () => {
    toast.success('Recordatorio programado para el 23 de noviembre a las 21:00 en tu hora local.', {
       autoClose: 3000, 
    });
  };
  

  return (
    <div className={Styles.mainContainer}>
      <div className={Styles.countdownContainer}>
        <div className={Styles.circle}>
          <p>{timeLeft.days || 0}</p>
          <span>Días</span>
        </div>
        <div className={Styles.circle}>
          <p>{timeLeft.hours || 0}</p>
          <span>Horas</span>
        </div>
        <div className={Styles.circle}>
          <p>{timeLeft.minutes || 0}</p>
          <span>Minutos</span>
        </div>
        <div className={Styles.circle}>
          <p>{timeLeft.seconds || 0}</p>
          <span>Segundos</span>
        </div>
      </div>
      <button className={Styles.reminderButton} onClick={handleSetReminder}>
        🗓️ Agendar Recordatorio
      </button>
      <ToastContainer />
    </div>
  );
};
