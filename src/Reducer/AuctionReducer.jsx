export const AuctionReducer = (state, action) => {
  switch (action.type) {
    case "ADD_AUCTION":
      return [
        ...state,
        {
          Title: action.auction.Title,
          Description: action.auction.Description,
          StartDate: action.auction.StartDate,
          EndDate: action.auction.EndDate,
          StartingPrice: action.auction.StartingPrice,
          CreatedBy: action.auction.CreatedBy,
        },
      ];
    case "REMOVE_AUCTION":
      return state.filter((auction) => auction.AuctionID !== action.AuctionID);
    default:
      return state;
  }
};
