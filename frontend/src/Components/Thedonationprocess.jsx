import React from 'react';

const Thedonationprocess = () => {
    return (
        <div className="max-w-7xl mx-auto shadow-lg shadow-cyan-500/100 mb-2">
            <div className=" p-6 ">
                <h1 className="text-4xl font-semibold mb-4">The Donation Process</h1>
                <p className="text-lg mb-4 space-y-1">
                    Giving blood is simple and it saves lives. When you give blood, it is collected so it can be used to treat someone else.

                    For most people, giving blood is easy and follows the simple steps listed below. See our animation which takes you through what happens step by step.
                </p>
                <p className="text-lg mb-4">
                    For most people, giving blood is easy and follows the simple steps listed below. See our animation which takes you through what happens step by step.
                </p>
            </div>

            <div className="flex justify-center">
              <iframe
                width="800"
                height="400"
                src={`https://www.youtube.com/embed/7VVTUcUtJp4?autoplay=1&mute=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="p-6">
                <h1 className="text-3xl font-semibold mb-4 mt-2">Before you give blood</h1>
                <ul className="list-decimal mb-4 mt-3 pl-6 space-y-1">
                    <li>Check you are able to give blood.</li>
                    <li>Sign up online, or call 0300 123 23 23.</li>
                    <li>Log in to your online account and find an appointment – a number of appointments can be booked in advance. If you are unable to book now, then please try for a later date. A limited number of walk-in slots are available.</li>
                    <li>Follow the preparing to give blood recommendations.</li>
                    <li>If you are unable to keep your donation appointment please try and give us at least 3 days' notice. You can easily cancel or reschedule your appointment when you log in to your online account.</li>
                </ul>
            </div>
            <div className="p-6 mb-5">
                <h1 className="text-3xl font-semibold mb-4">When you give blood</h1>
                <p className="mb-4">This is what will happen when you give blood. The whole process takes about an hour</p>
                <h2 className="text-xl font-semibold mb-4 space-y-1">1. Welcome and preparation</h2>
                <p>Remember to bring your completed donation safety check form with you, if you received one from us in the post.
                    We will ask you to read our donor consent booklet which explains the importance of blood safety.
                    It’s important to read this whenever you attend because advice does change. We will give you 500ml
                    of fluid just before you give blood.
                    Drinking this over about 5 minutes will help with your well-being during and after donation.</p>

                <h2 className="text-xl font-semibold mb-4 mt-4 space-y-1">2. Health screening</h2>
                <p>Remember to bring your completed donation safety check form with you, if you received one from us in the post.
                    We will ask you to read our donor consent booklet which explains the importance of blood safety.
                    It’s important to read this whenever you attend because advice does change. We will give you 500ml
                    of fluid just before you give blood.
                    Drinking this over about 5 minutes will help with your well-being during and after donation.</p>
                <h2 className="text-xl font-semibold mb-4 mt-4 space-y-1">3. Your blood donation</h2>
                <p>When you are comfortable on the chair we will ask you to confirm your name, address and date of birth.

                    We examine your arm and place a cuff on your arm to maintain a small amount of pressure during donation (this does not measure blood pressure).

                    We then examine your arm to find a suitable vein and clean it with an antiseptic sponge. If we're unable to draw blood first time, we will not make a second attempt on a less suitable vein - this is to keep all our donors safe. </p>
                   <ul className="list-decimal pl-6  mt-3 space-y-1">
                    <li>We will insert a needle in your arm which will collect your blood into a blood bag with your unique donor number. </li>
                    <li>You should not feel any discomfort or pain. If you do, tell a member of staff.</li>
                    <li>A scale weighs the blood and stops when you have donated 470ml (or just under a pint). This usually takes between 5-10 minutes</li>
                    <li>The needle will be removed, and a sterile dressing applied to your arm.</li>
                </ul>
            </div>

            
        </div>
    );
}

export default Thedonationprocess;
