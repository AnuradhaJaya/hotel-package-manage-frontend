import React, { useEffect, useState } from 'react';
import summaryApi from '../common';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
<<<<<<< Updated upstream
//import Hero from 'components/Hero.js';
=======
import Hero from 'components/Hero.js';
>>>>>>> Stashed changes

function Home() {
  const [feedbacks, setFeedbacks] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [searchDate, setSearchDate] = useState('');
  const [deletefeedback, setDeleteFeedback] = useState(null);
<<<<<<< Updated upstream
=======

  const fetchFeedbacks = async () => {
    try {
      const fetchData = await fetch(summaryApi.get_feedback.url, {
        method: summaryApi.get_feedback.method,
        credentials: 'include'
      });
      const dataResponse = await fetchData.json();

      if (dataResponse.success) {
        setFeedbacks(dataResponse.data);
      }
      if (dataResponse.error) {
        toast.error(dataResponse.message);
      }
    } catch (error) {
      console.error('Error fetching feedbacks:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const handleSearchDateChange = (e) => {
    setSearchDate(e.target.value);
  };

  const filteredFeedbacks = searchDate
    ? feedbacks.filter(feedback => new Date(feedback.date).toISOString().split('T')[0] === searchDate)
    : feedbacks;

  const generateStars = (rating, minRating) => {
    const stars = [];
    if (rating > minRating) {
      for (let i = 0; i < rating; i++) {
        stars.push(<span key={i} className="star text-yellow-500">★</span>);
      }
    }
    return stars;
  };

>>>>>>> Stashed changes

  const fetchFeedbacks = async () => {
    try {
      const fetchData = await fetch(summaryApi.get_feedback.url, {
        method: summaryApi.get_feedback.method,
        credentials: 'include'
      });
      const dataResponse = await fetchData.json();

      if (dataResponse.success) {
        setFeedbacks(dataResponse.data);
      }
      if (dataResponse.error) {
        toast.error(dataResponse.message);
      }
    } catch (error) {
      console.error('Error fetching feedbacks:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const handleSearchDateChange = (e) => {
    setSearchDate(e.target.value);
  };

  const filteredFeedbacks = searchDate
    ? feedbacks.filter(feedback => new Date(feedback.date).toISOString().split('T')[0] === searchDate)
    : feedbacks;

  const generateStars = (rating, minRating) => {
    const stars = [];
    if (rating > minRating) {
      for (let i = 0; i < rating; i++) {
        stars.push(<span key={i} className="star text-yellow-500">★</span>);
      }
    }
    return stars;
  };

  return (
    <>
      <Header />
<<<<<<< Updated upstream
      {/* <Hero /> */}
=======
      <Hero />
>>>>>>> Stashed changes
      <div className="min-w-screen min-h-screen bg-gray-50 flex items-center justify-center ">
        <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-16 md:py-24 text-gray-800">
          <div className="w-full max-w-6xl mx-auto">
            <div className="text-center max-w-xl mx-auto">
              <h1 className="text-6xl md:text-7xl font-bold mb-5 text-gray-600">What people <br />are saying.</h1>
              <h3 className="text-xl mb-5 font-light"></h3>
              <div className="text-center mb-10">
                <span className="inline-block w-1 h-1 rounded-full bg-navy-600 ml-1"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-navy-600 ml-1"></span>
                <span className="inline-block w-40 h-1 rounded-full bg-navy-600"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-navy-600 ml-1"></span>
                <span className="inline-block w-1 h-1 rounded-full bg-navy-600 ml-1"></span>
              </div>
            </div>
            <div className="mx-3 md:flex items-start">
              {filteredFeedbacks.map((data, index) => {
<<<<<<< Updated upstream
                if (data.rating > 4) {
=======
                if (data?.rating > 4) {
>>>>>>> Stashed changes
                  return (
                    <div className="px-3 md:w-1/3" key={index}>
                      <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                        <div className="w-full flex mb-4 items-center">
                          <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                            <img src="https://i.pravatar.cc/100?img=1" alt="" />
                          </div>
                          <div className="flex-grow pl-3">
                            <h6 className="font-bold text-base uppercase text-gray-600">{data?.name}</h6>
                            <h6 className="font-bold text-sm uppercase text-gray-600">{generateStars(data?.rating)}</h6>
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
                          </div>
                          <div className="flex-grow pl-4 mb-4">
                            <h6 className="font-bold text-xs uppercase text-gray-600">{moment(data?.createdAt).format('LL')}</h6>
                          </div>
                        </div>
                        <div className="w-full">
                          <p className="text-sm leading-tight"><span className="text-lg leading-none italic font-bold text-gray-400 mr-1">"</span>{data?.suggestions}<span className="text-lg leading-none italic font-bold text-gray-400 ml-1">"</span></p>
                        </div>
                      </div>
                    </div>
<<<<<<< Updated upstream
                  );
                }
              })}
=======

                  )
                }
              }
              )}

>>>>>>> Stashed changes
            </div>
          </div>
        </div>
      </div>
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
      <Footer />
    </>
  );
}

export default Home;
