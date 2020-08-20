
import { NotificationService} from './components/notification/notification.service';

const notification  = new NotificationService();
export function removeDeletedItem(
  arrayOfItems: any,
  itemId: any,
  field = 'id'
) {
  const newItems = arrayOfItems;
  return newItems.filter((item: any) => {
    return item[field] !== itemId;
  });
}

/**
 * Reusabel Error Method
 * @param error
 */
export function componentError(
  error: any
) {
  //let errorMsg = JSON.parse(error);
  notification.error(error);
  console.log(` error: ${error}`);
  return;
}

export function serverError(
  error?: any
) {
  const parsedError = JSON.parse(error);

  if (parsedError.error.message) {
    componentError(parsedError.error.message);
  }

  console.log('serverError', parsedError);
}

export function formatCurrency(amount: any, currencyCode = 'NGN'){
  return amount ? `${new Intl.NumberFormat().format(amount)}${currencyCode}` : '';
  
}