import { useState } from "react"
import { useEffect } from "react"
import useAuthStore from "../store/useAuthStore.js"
import {Link} from 'react-router-dom'
import PeopleCard from "../components/peopleCard.jsx"
import { API_URL } from '../config'

const ConnectedPeople = () => {
    const {token, user} = useAuthStore()
    const [loading, setLoading] = useState(false)
    const [connected, setConnected] = useState([])
    useEffect(()=>{
        const fetchConnected= async()=>{
            try {
                setLoading(true)
                const response = await fetch(`${API_URL}/api/connection/accepted`,{
                    headers:{'Content-Type':'application/json',
                    Authorization: `Bearer ${token}`}
             })
                const result = await response.json()
                if(!response.ok){
                    throw new Error(result.message)
                }
                console.log(result?.myAcceptedConnections)
                setConnected(result?.myAcceptedConnections)
            } catch (error) {
                console.log("Error:", error.message)
            } finally {
                setLoading(false)
            }
        }
        console.log(result?.myAcceptedConnections);
        setConnected(result?.myAcceptedConnections);
      } catch (error) {
        console.log("Error:", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchConnected();
  }, []);

  return (
    <>
      {loading ? (
        "Loading...."
      ) : (
        <div className="flex flex-col gap-2">
          <div className="flex justify-start mt-5 ml-5 gap-3">
            <button className="btn bg-cyan-400 text-white font-semibold text-lg rounded-xl">
              <Link to="/connection-feed">🢀 Back</Link>
            </button>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {connected.map((people) => {
              const currentUserId = user?._id?.toString();
              const senderId = people?.sender?._id?.toString();
              const otherUser =
                senderId === currentUserId ? people?.receiver : people?.sender;

              if (otherUser?._id?.toString() === currentUserId) {
                return null;
              }
              return <PeopleCard user={otherUser} />;
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default ConnectedPeople;
