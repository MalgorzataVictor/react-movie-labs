
import Typography from "@mui/material/Typography";


const ActorDetails = ({ actor}) => {


    const cardStyle = {
        background: "#f5f5f5",
        borderRadius: "10px",
        padding: "24px",
        marginBottom: "20px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    };


    return (
        <>
            <div style={cardStyle}>
                <Typography
                    variant="h4"
                    align="center"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                >
                    Details
                </Typography>
                <Typography
                    variant="body1"
                    align="center"
                    sx={{ maxWidth: "800px", margin: "0 auto" }}
                >
                    {actor.biography}
                </Typography>
            </div>

            
        </>
    );
};

export default ActorDetails;
