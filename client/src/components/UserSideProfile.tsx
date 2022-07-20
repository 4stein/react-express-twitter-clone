import { colors } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Popover from "@material-ui/core/Popover";
import ArrowBottomIcon from "@material-ui/icons/KeyboardArrowDown";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { useHomeStyles } from "../pages/theme";

interface UserSideProfileProps {
  classes: ReturnType<typeof useHomeStyles>;
}

export const UserSideProfile: React.FC<UserSideProfileProps> = ({
  classes,
}: UserSideProfileProps): React.ReactElement => {
  const [visiblePopup, setVisiblePopup] = React.useState<boolean>(false);
  const anchorRef = React.useRef<HTMLDivElement>();

  const handleOpenPopup = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    anchorRef.current = event.currentTarget;
    setVisiblePopup(true);
  };

  const handleClosePopup = (): void => {
    setVisiblePopup(false);
  };

  return (
    <>
      <div onClick={handleOpenPopup} className={classes.sideProfile}>
        <Avatar src="https://scontent.fiev24-1.fna.fbcdn.net/v/t39.30808-1/244697508_1886106798217814_8643688549211563206_n.jpg?stp=c0.0.40.40a_cp0_dst-jpg_p40x40&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=-Jv4EvIoKEoAX-7vpOZ&_nc_ht=scontent.fiev24-1.fna&oh=00_AT8AykVTcPSy5E0e6UVAVaZYfMhhbdINThASBqPACF7QTg&oe=62DC737A" />

        <div className={classes.sideProfileInfo}>
          <b>Mike Doruchenko</b>
          <Typography style={{ color: colors.grey[500] }}>
            @doruchenko
          </Typography>
        </div>
        <ArrowBottomIcon />
      </div>
      <Popover
        open={visiblePopup}
        onClose={handleClosePopup}
        anchorEl={anchorRef.current}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        The content of the Popover.
      </Popover>
    </>
  );
};
