import React from 'react';
import styled from 'styled-components';

const AddJob = () => {
    return (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Add a New Job</h2>
            <form>
                <div className="mb-4">
                    <label htmlFor="jobTitle" className="block text-gray-700">Job Title</label>
                    <input
                        type="text"
                        id="jobTitle"
                        name="jobTitle"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="jobType" className="block text-gray-700">Job Type</label>
                    <input
                        type="text"
                        id="jobType"
                        name="jobType"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="location" className="block text-gray-700">Location</label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="deadline" className="block text-gray-700">Application Deadline</label>
                    <input
                        type="date"
                        id="deadline"
                        name="deadline"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <StyledButton type="submit">Add Job</StyledButton>
            </form>
        </div>
    );
};

const StyledButton = styled.button`
   --border-radius: 15px;
   --border-width: 4px;
   appearance: none;
   position: relative;
   padding: 1em 2em;
   border: 0;
   background-color: #212121;
   font-family: "Roboto", Arial, "Segoe UI", sans-serif;
   font-size: 18px;
   font-weight: 500;
   color: #fff;
   z-index: 2;
   cursor: pointer;

   &::after {
      --m-i: linear-gradient(#000, #000);
      --m-o: content-box, padding-box;
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      padding: var(--border-width);
      border-radius: var(--border-radius);
      background-image: conic-gradient(
         #488cfb,
         #29dbbc,
         #ddf505,
         #ff9f0e,
         #e440bb,
         #655adc,
         #488cfb
      );
      -webkit-mask-image: var(--m-i), var(--m-i);
      mask-image: var(--m-i), var(--m-i);
      -webkit-mask-origin: var(--m-o);
      mask-origin: var(--m-o);
      -webkit-mask-clip: var(--m-o);
      mask-composite: exclude;
      -webkit-mask-composite: destination-out;
      filter: hue-rotate(0);
      animation: rotate-hue linear 500ms infinite;
      animation-play-state: paused;
   }

   &:hover::after {
      animation-play-state: running;
   }

   @keyframes rotate-hue {
      to {
         filter: hue-rotate(1turn);
      }
   }

   box-sizing: border-box;

   &:active {
      --border-width: 5px;
   }
`;

export default AddJob;
