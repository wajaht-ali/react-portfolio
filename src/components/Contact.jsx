import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>
        <main>
            <h1>Contact Me</h1>
            <p>Share your thoughts, just a text away.</p>
            <form action="">
                <div>
                    <label>Name</label>
                    <input type="text" required placeholder='Enter your name...' />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" required placeholder='Enter your email...' />
                </div>
                <div>
                    <label>Message</label>
                    <input type="text" required placeholder='Your Message...' />
                </div>
                <button type="submit">Send</button>

            </form>
        </main>
    </div>
  )
}

export default Contact