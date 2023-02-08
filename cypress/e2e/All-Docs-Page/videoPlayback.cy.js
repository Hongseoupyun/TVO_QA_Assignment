// Video Playback:
// Test Case 1: Verify that the user can play a video by clicking on it.
// Test Case 2: Verify that the video starts playing and the controls are displayed.
// Test Case 3: Verify that the user can pause, play, and stop the video.

describe("Verify Video Playback", () => {
  it("user can play a video by clicking on it", () => {
    cy.visit("https://www.tvo.org/series-docs/browse/categories/all");
    cy.get(".document-card").first().click();
    cy.get(".play-button").click();
    cy.get("video").should("be.visible");
  });

  it("video starts playing and the controls are displayed", () => {
    cy.get(".video-play").should("be.visible");
    cy.get(".video-play").click();
    cy.get(".video-pause").should("be.visible");
    cy.get(".skip-back").should("be.visible");
    cy.get(".skip-ahead").should("be.visible");
    cy.get(".volume").should("be.visible");
    cy.get(".fullscreen").should("be.visible");
    cy.get("video-pause").click();
  });

  it("user can pause, play, and stop the video", () => {
    cy.get(".video-play")
      .click()
      .then(($video) => {
        $video[0].play();
      });
    // once the video starts playing, check props
    cy.get("video")
      .should("have.prop", "paused", false)
      .and("have.prop", "ended", false);
    // pause the video
    cy.get(".video-pause").click();
    cy.get("video")
      .should("have.prop", "paused", true)
      .and("have.prop", "ended", false);
  });
});
