import React, {useEffect} from 'react'; 
import {useInView} from 'react-intersection-observer'; 

export const InfiniteScroll = ({listItems, lastRowHandler}) =>  {
    const [lastRowRef, lastRowInView] = useInView();
    useEffect(() => {
        lastRowInView && lastRowHandler();
    }, [lastRowInView]);
    const Elements = listItems.map((listItem,i) => {
        const props = {key: i};
        (i === listItems.length - 1) && (props['ref'] = lastRowRef);
        return (
          <div {...props}>
              {listItem}
          </div>
        );
    });
    return (<>{Elements}</>);
}