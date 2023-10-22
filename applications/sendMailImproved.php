<?php
/**
 * Created by PhpStorm.
 * User: bao
 * Date: 10/30/2018
 * Time: 8:36 PM
 */

sendMailToClient('000129', 'baotranomatic@gmail.com');

function sendMailToClient($invoiceId, $recipient) {

//    $conn=new mysqli("localhost", "root", "3KjSGsQXfuxRXthx", "milehighvisasDB");
//    if ($conn->connect_error) {
//        die("Connection failed: " . $conn->connect_error);
//    }

// Get Customer information
//    $sql="SELECT * FROM customer WHERE invoiceid='$invoiceId'";
//    $resultRow = query($conn, $sql);

    $company = 'MileHighVisas';
    $address = '787 Emmet Road';
    $city    = 'Sun City';
    $state   = 'Colorado';
    $zip     = '018272';
    $contactN= 'John Doe';
    $phone   = '(413) 727-8281';

// Get Shipping Address
//    $sql = "SELECT * FROM shipaddress WHERE invoiceid='$invoiceId'";
//    $resultRow = query($conn, $sql);

    $shipCompany = 'MileHighVisas';
    $shipAddress = '787 Emmet Road';
    $shipCity    = 'Sun City';
    $shipState   = 'Colorado';
    $shipZip     = '018272';
    $shipRecipient= 'John Doe';
    $shipPhone   = '(413) 727-8281';

// Get Order information
//    $sql = "SELECT orderid, orderfirst, orderlast, orderservice, ordervisatype, orderentry, ordergovtfee, ordersvcfee, ordergovtfee+ordersvcfee AS 'subtotal', ordersessionid
//        FROM orders
//        WHERE ordersessionid='".session_id()."'
//        ORDER BY ordercategory, orderservice, orderlast, orderfirst";
//    $result = query($conn, $sql);
    $resultRow = array("orderfirst"=>"BAO", "orderlast"=>"TRAN", "orderservice"=>"China", "ordervisatype"=>"Tourist", "orderentry"=>"M", "ordergovtfee"=>140.00, "ordersvcfee"=>69.00, "subtotal"=>209.00);

    $orderTotal = 0;
    $itemsHtml = "";
    $i = 0;
    while ($i < 2) {
        $itemsHtml .=
            "<tr>".
            "<td class='border-bottom'>".$resultRow['orderfirst']                           ."</td>".
            "<td class='border-bottom'>".$resultRow['orderlast']                            ."</td>".
            "<td class='border-bottom'>".$resultRow['orderservice']                         ."</td>".
            "<td class='border-bottom'>".$resultRow['ordervisatype']                        ."</td>".
            "<td class='border-bottom' align='center'>".$resultRow['orderentry']            ."</td>".
            "<td class='rowStyle' >$".number_format($resultRow['ordergovtfee'],2)  ."</td>".
            "<td class='rowStyle' >$".number_format($resultRow['ordersvcfee'],2)   ."</td>".
            "<td class='rowStyle' >$".number_format($resultRow['subtotal'],2)      ."</td>".
            "</tr>";

        $orderTotal += $resultRow['subtotal'];
        $i++;
    }

    $orderTotal = number_format($orderTotal, 2);

// Get Shipping information
//    $sql = "SELECT shipmethod, shipfee FROM cartshipping WHERE sessionid='".session_id()."'";
//    $resultRow = query($conn, $sql);
    $resultRow = array("shipmethod"=>"FEDEX", "shipfee"=> 32.00, "ccamt"=>100.00, "cctype"=>"VISA", "ccnum"=>"0424", "ccfee"=>15.60, "billamt"=>500.00);

    $shipMethod = $resultRow['shipmethod'];
    $shipFee    = number_format($resultRow['shipfee'],2);

    $invoiceTotal = number_format((float) $orderTotal + (float) $shipFee,2);

// Get Payment information
//    $sql = "SELECT * FROM payment WHERE sessionid='".session_id()."'";
//    $resultRow = query($conn, $sql);

    $cardType = "Unknown";
    $cardNum = "XXXX";
    $cardFee = 0;
    $invoiceTotalPlus = 0;
    $cardPayment = 0;

    if ($resultRow['ccamt'] > 0) {
        $cardType = $resultRow['cctype'];
        $cardNum  = $resultRow['ccnum'];
        $cardAmt  = number_format($resultRow['ccamt'],2);
        $cardFee  = number_format($resultRow['ccfee'],2);
        $invoiceTotalPlus = number_format((float) $invoiceTotal + (float) $cardFee,2);
        $cardPayment = number_format((float) $cardAmt + (float) $cardFee,2);
    }

    $billAmt  = number_format($resultRow['billamt'], 2);

    if ($billAmt == 0) {
        $billHtml = "
            <tr style='font-weight: bold; font-size: 24px'>
                <td colspan='7' align='right'>BALANCE DUE</td>
                <td align='right'>&#36;{$billAmt}</td>
            </tr>
        ";
    } else {
        $billHtml = "
            <tr style='font-size:24px; color:red; font-weight:bold'>
                <td colspan='7' align='right'>BALANCE DUE</td>
                <td align='right'>&#36;{$billAmt}</td>
            </tr>
            <tr style='font-size:14px; color:red; font-style:italic;'>
                <td colspan='7' align='right'><p>Balance due upon receipt. Unpaid invoice may be subject to a late fee of 1.5% per month.</p></td>
            </tr>
            <tr><td></td></tr>
            <tr style='font-size:14px; font-weight:bold'>
                <td colspan='4'></td>
                <td colspan='3' align='center' style='border:1px solid #000000;'><p>Please make check payable to:<br />MILE HIGH VISAS, LLC</p></td>
            </tr>	
        ";
    }
//    $conn->close();

    $to = $recipient;
    $subject = "MileHighVisas Payment Invoice #".$invoiceId;

    $message = "
			<html>
				<head>
					<title></title>
					<style>
					    .rowStyle {
					        text-align: right;
					        border-bottom: 2px solid #cdd0d4;
					    }
					    
					    .border-bottom {
					        border-bottom: 2px solid #cdd0d4;
					    }
					    table {
					        width: 100%;
					        border-collapse: separate;
                            border-spacing: 5px;
					    }
                    </style>
				</head>
				<body style='font-family:Arial,serif'>
				    <table width='50%'>
				        <tr>
				            <td align='right' width='10%'>INVOICE NO:</td>
				            <td>{$invoiceId}</td>
                        </tr>
                        <tr>
				            <td align='right'>DATE:</td>
				            <td>".date('m/d/Y')."</td>
                        </tr>
                        <tr><td></td></tr>
                    </table>
                    <table>
                        <tr>
                            <td>
                                <fieldset>
                                    <legend>BILL TO</legend>
                                    <p>{$company}</p>
                                    <p>{$address}</p>
                                    <p>{$city} {$state} {$zip}</p>
                                    <p>{$contactN}</p>
                                    <p>{$phone}</p>
                                </fieldset>
                            </td>
                            <td>
                                <fieldset>
                                    <legend>SHIP TO</legend>
                                    <p>{$shipCompany}</p>
                                    <p>{$shipAddress}</p>
                                    <p>{$shipCity} {$shipState} {$shipZip}</p>
                                    <p>{$shipRecipient}</p>
                                    <p>{$shipPhone}</p>
                                </fieldset>
                            </td>
                        </tr>
                    </table>
                   <p style='font-size:28px;text-align:center'> I N V O I C E </p>
					<table>
                        <thead>
                            <tr style='color:#666666; text-decoration: underline;'>
                                <th width='10%'>  FIRST NAME    </td>
                                <th width='10%'>  LAST NAME     </td>
                                <th width='18%'>  SERVICE       </td>
                                <th width='7%' >  VISA TYPE     </td>
                                <th width='5%' >  ENTRY         </td>
                                <th width='7%' >  AGENCY FEE    </td>
                                <th width='7%' >  SERVICE FEE   </td>
                                <th width='7%' >  SUB TOTAL     </td>
                            </tr>                    
                        </thead>
					    <tbody>
					        {$itemsHtml}
                            <tr>
                                <td colspan='8' align='right'>
                                    &#36;{$orderTotal}                  
                                </td>
                            </tr>
                            <tr>
                                <td colspan='3'></td>
                                <td colspan='4' class='rowStyle'>Shipping {$shipMethod}</td>
                                <td class='rowStyle'>&#36;{$shipFee}</td>            
                            </tr>
                            <tr>
                                <td colspan='8' align='right'>
                                    &#36;{$invoiceTotal}
                                </td>             
                            </tr>
                            <tr>
                                <td colspan='3'></td>
                                <td colspan='4' class='rowStyle'>Credit Card Convenience Fee</td>
                                <td class='rowStyle'>&#36;{$cardFee}</td>        
                            </tr>
                            <tr style='font-weight: bold'>
                                <td colspan='7' class='rowStyle'>INVOICE TOTAL</td>
                                <td class='rowStyle'>&#36;{$invoiceTotalPlus}</td>            
                            </tr>
                            <tr style='margin-top:15px; margin-bottom: 15px'>
                                <td colspan='7' class='rowStyle' style='font-size: 24px; font-weight: bold;'>
                                    PAYMENT
                                </td>             
                            </tr>
                            <tr><td></td></tr>
                            <tr>
                                <td colspan='3'></td>
                                <td colspan='3' class='rowStyle'>{$cardType}-XXXX-{$cardNum}</td> 
                                <td class='rowStyle'>&#36;{$cardPayment}</td>           
                            </tr>
                            <tr style='font-weight: bold'>
                                <td colspan='3'></td>
                                <td colspan='4' class='rowStyle'>TOTAL PAYMENT</td>
                                <td class='rowStyle'>&#36;{$invoiceTotalPlus}</td>
                            </tr>
                            {$billHtml}
                        </tbody>
                        <tfoot>
                                                
                        </tfoot>
                    </table>
				</body>
				<footer style='line-height:5px;font-size:small;color:grey; margin-top:100px'>
					<img src='http://milehighvisas.com/dashboard/assets/mhv-logo.png' alt='mile high visas logo'>
					<p>14142 Denver West Parkway, Suite 101 | Lakewood, CO 80401 | USA</p>
					<p>info@milehighvisas.com</p>
					<p>(888) 243-2033</p>
				</footer>
			</html>
		";


    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= 'From: MileHighVisas <orders@milehighvisas.com>' . "\r\n";
    $headers .= 'Reply-To: MileHighVisas <orders@milehighvisas.com>' . "\r\n";
    $headers .= 'Return-Path: MileHighVisas <orders@milehighvisas.com>' . "\r\n";

    mail($to,$subject,$message,$headers);
}

/**
 * @param $conn
 * @param $sql
 * @return single row if only has one row, else return result for fetching
 */
function query($conn, $sql) {
    $result = $conn->query($sql);

    if ($result->num_rows > 1) {
        return $result;
    }
    return $result->fetch_assoc();
}

?>