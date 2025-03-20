# LetsJam App - Clarification Questions

## Technical Architecture

1. **Authentication Implementation**
   - Will we be using Firebase Authentication or implementing a custom solution? I'm unsure and will do whatever is recommended. I would prefer not to use a custom solution unless it is necessary for MVP.
   - How will we handle authentication tokens for both Spotify and Apple Music? The user will log in to their respective accounts and link them.
   - What's the fallback authentication method if users don't connect streaming services? They should be able to participate using only a LetsJam account.

2. **Database Structure**
   - Could we get more details on the Firebase collections/document structure? No.
   - How will we handle offline/online synchronization? Not needed for MVP. The app shouldn't work offline. 
   - What's the strategy for handling real-time updates? Unsure. Need recommendation.

3. **API Integration**
   - What are the specific API endpoints we'll be using from Spotify and Apple Music? Unsure.
   - Do we have developer accounts set up for both platforms? Not yet. 
   - How will we handle API rate limiting, especially for the Spotify API's 1 request/sec limit? I don't expect to exceed this at first. We can bundle requests to get around this and update playlists on the streaming service at intervals.

## User Experience

1. **Playlist Syncing**
   - How exactly will changes sync between Spotify and Apple Music? They won't. All changes will sync via LetsJam. Spotify and Apple Music will not sync with one another.
   - What happens when a song exists on one platform but not the other? The app will attempt to find the most similar song on the other platform and confirm it with the user.
   - How will we handle platform-specific features (like Spotify's collaborative playlist feature)? We will not handle this.

2. **User Onboarding**
   - What's the minimum required setup for a new user? They should be able to create a LetsJam account and participate in a LetsJam.
   - Is connecting at least one streaming service mandatory? No.
   - Will there be a tutorial or guided first-use experience? Yes.

3. **Offline Functionality**
   - What features will be available when users are offline? Not needed for MVP.
   - How will changes made offline be reconciled when coming back online? Not needed for MVP.

## Feature Scope

1. **MVP Boundaries**
   - Can we clarify the exact features included in the MVP versus later phases? See the planning document.
   - Are there any features in the wireframes that aren't part of the MVP? Possibly, yes.

2. **Social Features**
   - The planning document mentions a friend system in Phase 3, but how will users find collaborators in the MVP? They will send links to the LetsJam.
   - Will there be any social discovery features in the early versions? No.

3. **Playlist Limitations**
   - Are there any limits on playlist size, number of collaborators, or number of playlists per user? I will need to understand the technical limitations, but start with 1000 songs, 10 collaborators, and 100 playlists per user.
   - How will we handle very large playlists? Limit the number of songs before them become very large.

## Design & UI

1. **Responsive Design**
   - How should the UI adapt to different screen sizes? Fluidly.
   - Are there specific design considerations for tablets versus phones? Not for MVP.

2. **Accessibility**
   - What accessibility requirements should we prioritize? None for MVP.
   - Will we support features like VoiceOver, TalkBack, and high contrast themes? Not for MVP.

3. **Animation & Transitions**
   - Are there specific animations or transitions desired between screens? Native iOS/android animations.
   - Should we implement skeleton loading states? Yes.

## Business & Legal

1. **Terms of Service**
   - Do we need to create custom Terms of Service and Privacy Policy? Not for MVP.
   - Are there specific legal considerations around music streaming integration? Not for MVP.

2. **Monetization**
   - Is there a monetization strategy planned for the future? We need to plan one.
   - Will there be premium features or subscription options? Yes. Maybe the limits could change depending on the subscription level.

## Testing & Deployment

1. **Testing Strategy**
   - What testing approach should we use? (Unit tests, integration tests, etc.) I'm unsure.
   - Should we set up automated testing from the beginning? Yes.

2. **Deployment Timeline**
   - What's the target timeline for the MVP release? As soon as possible.
   - Will there be a beta testing phase? Yes.
   - Which app stores will we target initially? iOS and Android.