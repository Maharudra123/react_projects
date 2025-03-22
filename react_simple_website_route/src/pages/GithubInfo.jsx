import React, { useState, useEffect } from "react";
import { Container, Card, Spinner } from "react-bootstrap";

function GithubInfo() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/Maharudra123")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <Container>
      <h1>GitHub Info</h1>
      {user ? (
        <Card className="p-3">
          <Card.Img
            variant="top"
            src={user.avatar_url}
            style={{ width: "150px", borderRadius: "50%" }}
          />
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>
              <strong>Username:</strong> {user.login} <br />
              <strong>Followers:</strong> {user.followers} <br />
              <strong>Public Repos:</strong> {user.public_repos}
            </Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <Spinner animation="border" />
      )}
    </Container>
  );
}

export default GithubInfo;
