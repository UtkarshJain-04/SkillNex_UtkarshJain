import { getMyEvents } from "../Repositories/eventRepository.js"
import { findMyProjects } from "../Repositories/projectRepository.js"
import { findUserById } from "../Repositories/userRepository.js"
import { getEventFeed } from "./eventService.js"


const buildPrompt = (events, user, projects)=>{

    return `You are a senior software engineer mentoring a college student. 
    Study and analyze these EVENTS happening in various college and platforms, 
    return recommended EVENTS only from GIVEN EVENTS on basis of STUDENT PROFILE and
     his PROJECTS ONLY exactly in this valid JSON format,
     don't invent new events and provide no explanations,
     If nothing matches return []:
    
    [
  {
    "title":"",
    "description":"",
    "category":"",
    "mode":"",
    "eligibility":"",
    "startDate":"",
    "endDate":"",
    "regDeadline":"",
    "status":"",
    "prize":"",
    "venue":""
  }
]

    STUDENT PROFILE: ${user},
    PROJECTS: ${projects},
    EVENTS: ${events}
    `
}

export const analyzeEventsWithAI = async(userId) =>{
    const events = await getEventFeed(userId)
    const user = await findUserById(userId)
    const projects = await findMyProjects(userId)
    const prompt = buildPrompt(events, user, projects)
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.GROQ_API_KEY}`
        },
        body:JSON.stringify({
            model: "llama-3.3-70b-versatile",
            response_format: {
                type: "json_object"},
            messages: [
                {
                  role: "user",
                  content: prompt,
                },
              ],
        })
    })

    const data = await response.json()
    const aiEvents = data.choices[0].message.content
    console.log(aiEvents)
    console.log(events)
    console.log(projects)
    const start = aiEvents.indexOf("[");
    const end = aiEvents.lastIndexOf("]");
    const jsonstring = aiEvents.slice(start, end + 1);
    return JSON.parse(jsonstring);
}
