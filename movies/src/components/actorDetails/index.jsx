import Typography from "@mui/material/Typography";
import { Link } from "react-router";

const ActorDetails = ({ actor, actCredits }) => {




    const cardStyle = {
        background: "#f5f5f5",
        borderRadius: "10px",
        padding: "24px",
        marginBottom: "20px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    };

    const gridStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
        gap: "16px",
        marginTop: "16px",
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
                    {actor.biography || "No biography available."}
                </Typography>
            </div>


            {actCredits?.cast?.length > 0 && (
                <div style={cardStyle}>
                    
                        <Typography
                            variant="h4"
                            align="center"
                            gutterBottom
                            sx={{ fontWeight: 600 }}
                        >
                            Actor Credits
                        </Typography>

                        <div style={gridStyle}>
                            {actCredits.cast
                                .sort((a, b) => (b.release_date || "").localeCompare(a.release_date || "")) // newest first
                                .slice(0, 12)
                                .map((movie) => (
                                    <div
                                        key={movie.id}
                                        style={{
                                            background: "#fff",
                                            borderRadius: "10px",
                                            padding: "8px",
                                            textAlign: "center",
                                            transition: "transform 0.2s",
                                            boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                                            cursor: "pointer",
                                        }}
                                        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                                        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                                    >
                                        <Link to={`/movies/${movie.id}`} style={{ textDecoration: "none" }}>
                                        <img
                                            src={
                                                movie.poster_path
                                                    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                                                    : "/no-image.png"
                                            }
                                            alt={movie.title}
                                            style={{
                                                borderRadius: "8px",
                                                width: "100%",
                                                height: "225px",
                                                objectFit: "cover",
                                                marginBottom: "8px",
                                            }}
                                        />
                                        <Typography variant="subtitle2" noWrap>
                                            {movie.title}
                                        </Typography>
                                        <Typography variant="caption" noWrap sx={{ color: "#666" }}>
                                            {movie.character ? `as ${movie.character}` : "—"}
                                        </Typography>






                                            </Link>
                                    </div>
                                ))}
                        </div>
                
                </div >

            )}

        </>
    );
};

export default ActorDetails;
