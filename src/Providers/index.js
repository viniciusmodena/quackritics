import { ReviewsProvider } from "./reviews";
import { TitlesProvider } from "./titles";
import { UserProvider } from "./user";
import { TopicsProvider } from "./topics";
import { CommentsProvider } from "./comments";
import { ModalControllerProvider } from "./modalController";
import { MovieProvider } from "./movie";

const Providers = ({ children }) => {
  return (
    <TitlesProvider>
      <TopicsProvider>
        <MovieProvider>
          <ReviewsProvider>
            <CommentsProvider>
              <ModalControllerProvider>
                <UserProvider>{children}</UserProvider>
              </ModalControllerProvider>
            </CommentsProvider>
          </ReviewsProvider>
        </MovieProvider>
      </TopicsProvider>
    </TitlesProvider>
  );
};

export default Providers;
