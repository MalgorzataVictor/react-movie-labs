import React from "react";
import { useParams } from "react-router";
import PageTemplate from "../components/templateActorPage";
import { getActor } from "../api/tmdb-api";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../components/spinner";
import ActorDetails from "../components/actorDetails";

const ActorPage = () => {
  const { id } = useParams();

  const { data: actor, error, isPending, isError } = useQuery({
    queryKey: ["actor", { id }],
    queryFn: getActor,
  });


  return (
    <>
      {actor ? (
        <PageTemplate actor={actor}>
          <ActorDetails
            actor={actor}
          />
        </PageTemplate>
      ) : (
        <p>Waiting for actor details</p>
      )}
    </>
  );
};

export default ActorPage;
