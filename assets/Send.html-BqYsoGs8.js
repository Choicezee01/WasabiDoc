import{_ as h}from"./Logo_without_text_with_bg_dark_with_yt-D8lqXhN0.js";import{_ as d,c as u,a as p,b as c}from"./HistoryRightClick-DykL0_1P.js";import{_ as m}from"./CoinjoinStrategy-BZrDbG5n.js";import{_ as g,r as l,o as b,c as f,a as e,d as n,w as i,b as t,e as r}from"./app-CEdXK9ID.js";const y="/SendButton.png",_="/SendRecipientLabel.png",v="/Send.png",w="/SendChangeFee.png",k="/SendPrivacySuggestion.png",S="/SendPreviewTransaction.png",W="/SendPassword.png",T="/PaymentSuccessful.png",x={},C=e("h1",{id:"send",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#send"},[e("span",null,"Send")])],-1),A={class:"table-of-contents"},P={href:"https://youtu.be/vCI5aza-lv0",title:"Send in Wasabi Wallet",target:"_blank",rel:"noopener noreferrer"},F=e("img",{src:h,alt:"Send in Wasabi Wallet"},null,-1),B=r('<h2 id="how-to-send-bitcoin-step-by-step" tabindex="-1"><a class="header-anchor" href="#how-to-send-bitcoin-step-by-step"><span>How to send bitcoin step-by-step</span></a></h2><ol><li>Click the <code>Send</code> button.</li></ol><p><img src="'+y+'" alt="Wasabi Wallet Send Button" title="Wasabi Wallet Send Button"></p><ol start="2"><li>Enter/paste the destination address.</li></ol><p><img src="'+p+'" alt="Wasabi Wallet Send To Field" title="Wasabi Wallet Send To Field"></p><ol start="3"><li>Specify the amount of bitcoin to send to the destination address. Optionally, you can specify the dollar amount to send instead.</li></ol><p><img src="'+c+'" alt="Wasabi Wallet Send Amount Field" title="Wasabi Wallet Send Amount Field"></p><ol start="4"><li>Label the recipient by entering the name of the person or company who you are sending to.</li></ol><p><img src="'+_+'" alt="Wasabi Wallet Send Recipient Label" title="Wasabi Wallet Send Recipient Label"></p><ol start="5"><li>Click <code>Continue</code>.</li></ol><p><img src="'+v+'" alt="Wasabi Wallet Send" title="Wasabi Wallet Send"></p><ol start="6"><li><p>Preview Transaction.</p><ul><li>Verify the amount, recipient, and the address.</li><li>Review the estimated time for confirmation and the transaction fee. Optionally, you can change the transaction fee or confirmation time by clicking on the edit fee icon.</li></ul><p><img src="'+w+'" alt="Wasabi Wallet Send Change Fee" title="Wasabi Wallet Send Change Fee"></p><ul><li>Review the suggestions to improve your privacy by clicking the shield icon in the top right corner. For example, you may want to slightly increase or decrease your payment amount to avoid change.</li></ul><p><img src="'+k+'" alt="Wasabi Wallet Send Privacy Suggestion" title="Wasabi Wallet Send Privacy Suggestion"></p></li><li><p>Click <code>Confirm</code>.</p></li></ol><p><img src="'+S+'" alt="Wasabi Wallet Send Preview Transaction" title="Wasabi Wallet Send Preview Transaction"></p><ol start="8"><li>Type in your passphrase, then click <code>Send</code>.</li></ol><p><img src="'+W+'" alt="Wasabi Wallet Send Password" title="Wasabi Wallet Send Password"></p><ol start="9"><li>Transaction successfully sent!</li></ol><p><img src="'+T+'" alt="Wasabi Wallet Payment Successful" title="Wasabi Wallet Payment Successful"></p><h2 id="coins" tabindex="-1"><a class="header-anchor" href="#coins"><span>Coins</span></a></h2>',18),R=e("code",null,"Send",-1),U=e("h2",{id:"clusters",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#clusters"},[e("span",null,"Clusters")])],-1),I=e("code",null,"Alice",-1),j=e("code",null,"Alice, Bob",-1),O=e("h2",{id:"anonymity-set",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#anonymity-set"},[e("span",null,"Anonymity Set")])],-1),z=e("p",null,[t("A typical bitcoin transaction will contain one input and two outputs - one of the outputs is the coin you are sending and the other output is the change coin that goes back to your wallet. Your change coin can be linked to this one input. There is a 1 in 1 chance to find this link and no plausible deniability. Thus, Wasabi denotes this coin's anonymity set as "),e("code",null,"1"),t(".")],-1),N=e("p",null,[t("There are three coinjoin strategies to choose from in Wasabi Wallet which effect the target anonymity score for your coins. These three strategies are "),e("code",null,"Minimize Cost"),t(", "),e("code",null,"Maximize Speed"),t(", and "),e("code",null,"Maximize Privacy"),t(". Each of these strategies come with different trade-offs.")],-1),E=e("p",null,"Alternatively, custom coinjoin settings can be configured.",-1),H=e("p",null,[e("img",{src:m,alt:"Coinjoin Strategy",title:"Coinjoin Strategy"})],-1),L=e("h2",{id:"receiving-address",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#receiving-address"},[e("span",null,"Receiving Address")])],-1),M=e("code",null,"1",-1),q=e("code",null,"3",-1),G=e("code",null,"bc1q",-1),V=e("code",null,"bc1p",-1),K=e("h2",{id:"observers",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#observers"},[e("span",null,"Observers")])],-1),Y=r('<h2 id="amount" tabindex="-1"><a class="header-anchor" href="#amount"><span>Amount</span></a></h2><p>In the <code>Amount</code> text box you can specify how many bitcoins the receiving address will gain. You can also see and enter the current US Dollar value of the sending amount.</p><div class="custom-container tip"><p class="custom-container-title">Avoid sending rounded values</p><p>If you specify a rounded amount, like <code>0.0100 0000 bitcoin</code>, then the change output will not be rounded, like <code>0.0896 8413 bitcoin</code>. This makes it easy for an observer to conclude that the spending amount was the <code>0.01 bitcoin</code>, and that the other output is the change back to the sender. So in order to increase your privacy, you can set a non-rounded amount, like <code>0.0101 6843</code>.</p></div><p><img src="'+c+'" alt="Send Amount Field" title="Send Amount Field"></p><h2 id="mining-fee" tabindex="-1"><a class="header-anchor" href="#mining-fee"><span>Mining Fee</span></a></h2>',5),X=e("code",null,"value of inputs - value of outputs",-1),J=e("code",null,"smart fee",-1),Q=e("p",null,[e("img",{src:d,alt:"Wasabi Wallet Fee Slider",title:"Wasabi Wallet Fee Slider"})],-1),D=e("p",null,[t("In some cases, there is very little demand for block space, and then Wasabi will set the minimum fee of "),e("code",null,"1 sat/vByte"),t(".")],-1),$={class:"custom-container tip"},Z=e("p",{class:"custom-container-title"},"High-priority transaction fees",-1),ee=e("p",null,"If you have a transaction that is high-priority and you really want it to be confirmed ASAP:",-1),te={href:"https://mempool.space",target:"_blank",rel:"noopener noreferrer"},ne={href:"http://mempoolhqx4isw62xs7abwphsq7ldayuidyx2v2oethdhhj6mlo2r6ad.onion/",target:"_blank",rel:"noopener noreferrer"},ie=e("li",null,"Select a fee that is well above the current highest fee (perhaps double or triple it) if it is very important to you that the transaction is confirmed soon.",-1),oe={href:"https://bitcointechtalk.com/an-introduction-to-bitcoin-core-fee-estimation-27920880ad0",target:"_blank",rel:"noopener noreferrer"},ae=e("h2",{id:"privacy-suggestions",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#privacy-suggestions"},[e("span",null,"Privacy Suggestions")])],-1),se={href:"https://github.com/zkSNACKs/WalletWasabi/releases/tag/v2.0.4",target:"_blank",rel:"noopener noreferrer"},le=e("em",null,"Preview Transaction",-1),re=r('<p>There are warnings for:</p><ul><li>Interlinking labels</li><li>Using non-private coins</li><li>Using semi-private coins</li><li>Creating change</li><li>Consolidating 10 coins or more</li><li>Using unconfirmed coins</li><li>Using coinjoining coins</li></ul><p>There are clickable suggestions to:</p><ul><li>Manage labels (when interlinking labels)</li><li>Only use private coins</li><li>Not use non-private coins (only use private and semi-private)</li><li>Avoid change</li></ul><p>The suggestion to only use semi-private or private coins is only shown if the amount difference is less than or equal to 25%.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Each suggestion has a tooltip. Hover over the suggestion to see more information.</p></div><h2 id="password" tabindex="-1"><a class="header-anchor" href="#password"><span>Password</span></a></h2>',7),ce=e("h2",{id:"broadcast",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#broadcast"},[e("span",null,"Broadcast")])],-1),he=e("p",null,"Once the transaction is signed, Wasabi will connect to a random Bitcoin P2P node over Tor and provide this transaction, then it will immediately disconnect. This first node will gossip the transaction throughout the network, then miners can include it in a block.",-1),de=e("h2",{id:"speed-up-or-cancel-transaction",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#speed-up-or-cancel-transaction"},[e("span",null,"Speed Up or Cancel Transaction")])],-1),ue=e("p",null,'Pending (unconfirmed) Bitcoin transactions can be replaced by sending a new transaction that pays a higher fee rate using the same (or some) coins/UTXOs. This can be used to speed up or cancel a transaction. The miners are incentivized to mine the transaction with the higher fee rate, as this will earn them more money. If the new higher fee rate paying transaction is confirmed, the old transaction can be considered "replaced".',-1),pe={href:"https://github.com/zkSNACKs/WalletWasabi/releases/tag/v2.0.4",target:"_blank",rel:"noopener noreferrer"},me=e("em",null,"Cancel Transaction",-1),ge=e("p",null,"Speeding up or cancelling a transaction costs additional fees, because a new bitcoin transaction with a higher fee rate (than the previous transaction) has to be sent.",-1),be=e("p",null,"To Speed Up or Cancel a Transaction, right-click on the pending transaction in the history.",-1),fe=e("p",null,[e("img",{src:u,alt:"History Right Click",title:"History Right Click"})],-1),ye=e("p",null,"Click one of the two options and then confirm that you want to pay the additional fee for this action. After which the succesfully speed up/cancelled dialog is displayed.",-1),_e=e("p",null,"In the history, the transaction will now have a rocket (speeded up) or a cross (cancelled) icon. The transaction is still pending, but it should be confirmed sooner than the initial transaction.",-1),ve={href:"https://youtu.be/55KURak5r58",target:"_blank",rel:"noopener noreferrer"},we=e("img",{src:"https://img.youtube.com/vi/55KURak5r58/maxresdefault.jpg",alt:"How to speed up Bitcoin transaction"},null,-1);function ke(Se,We){const o=l("router-link"),s=l("ExternalLinkIcon"),a=l("RouteLink");return b(),f("div",null,[C,e("nav",A,[e("ul",null,[e("li",null,[n(o,{to:"#how-to-send-bitcoin-step-by-step"},{default:i(()=>[t("How to send bitcoin step-by-step")]),_:1})]),e("li",null,[n(o,{to:"#coins"},{default:i(()=>[t("Coins")]),_:1})]),e("li",null,[n(o,{to:"#clusters"},{default:i(()=>[t("Clusters")]),_:1})]),e("li",null,[n(o,{to:"#anonymity-set"},{default:i(()=>[t("Anonymity Set")]),_:1})]),e("li",null,[n(o,{to:"#receiving-address"},{default:i(()=>[t("Receiving Address")]),_:1})]),e("li",null,[n(o,{to:"#observers"},{default:i(()=>[t("Observers")]),_:1})]),e("li",null,[n(o,{to:"#amount"},{default:i(()=>[t("Amount")]),_:1})]),e("li",null,[n(o,{to:"#mining-fee"},{default:i(()=>[t("Mining Fee")]),_:1})]),e("li",null,[n(o,{to:"#privacy-suggestions"},{default:i(()=>[t("Privacy Suggestions")]),_:1})]),e("li",null,[n(o,{to:"#password"},{default:i(()=>[t("Password")]),_:1})]),e("li",null,[n(o,{to:"#broadcast"},{default:i(()=>[t("Broadcast")]),_:1})]),e("li",null,[n(o,{to:"#speed-up-or-cancel-transaction"},{default:i(()=>[t("Speed Up or Cancel Transaction")]),_:1})])])]),e("p",null,[e("a",P,[F,n(s)])]),B,e("p",null,[t("A coin is an unspent transaction output (UTXO): a chunk of bitcoin that can be sent in a future transaction. Unlike fiat currencies which have fixed denominations, each UTXO contains a variable amount of bitcoin. You can get coins by first "),n(a,{to:"/using-wasabi/Receive.html"},{default:i(()=>[t("receiving")]),_:1}),t(" them from someone else. When you want to send some bitcoin you simply enter the amount to send and the address after clicking the "),R,t(" button. Wasabi Wallet does the job of automatically selecting the appropriate combination of coins to include as inputs in the transaction.")]),U,e("p",null,[t("Every time you receive a payment, you first must "),n(a,{to:"/using-wasabi/Receive.html#the-importance-of-labeling"},{default:i(()=>[t("label the observers")]),_:1}),t(" who know this address is yours. This transaction metadata is used to build a cluster of which people know about your coins. For example, if you receive a coin from Alice, then the cluster is "),I,t(". If you now send half of this coin to Bob, then the cluster of your change coin is "),j,t(". The goal is to know the observers who know about your coins and try to reduce their number for each coin.")]),O,z,e("p",null,[t("In a Wasabi "),n(a,{to:"/using-wasabi/CoinJoin.html"},{default:i(()=>[t("coinjoin")]),_:1}),t(", many peers register coins in the input of the transaction, and in the output there are several equal value coins. For example, the output may contain 20 coins worth exactly 0.3 bitcoin. This means that when looking at one of these coinjoin outputs, there is a 1 in 20 chance to find the corresponding input: thus an anonymity set of 20. Therefore, the higher the anonymity set, the more your post-coinjoin coin is delinked from the pre-coinjoin history.")]),N,E,H,L,e("p",null,[t("When sending bitcoin, you need to know the destination address of the receiver. This commits to the spending condition that the receiver agrees to have for this coin. The address can be a public key hash [starting with "),M,t("], a script hash [starting with "),q,t("], a native SegWit bech32 public key hash [starting with "),G,t("], or a Taproot bech32m public key [starting with "),V,t("]. Make sure that you ask the receiver for a "),n(a,{to:"/why-wasabi/AddressReuse.html"},{default:i(()=>[t("new address")]),_:1}),t(" for every payment to protect your privacy and theirs. Wasabi will calculate the checksum and notify you if the provided address is wrong.")]),K,e("p",null,[t("In Wasabi it is mandatory to provide one or more "),n(a,{to:"/using-wasabi/Receive.html#the-importance-of-labeling"},{default:i(()=>[t("labels")]),_:1}),t(" each time you initiate a transfer of bitcoin. These labels should be the observers of the transaction. An observer of a sending transaction is, of course, the receiver, as well as any other third party that knows that you are the sender of this transaction. For example, you should include as a label the payment processor or the bitcoin exchange if you use their services. This metadata will be used to build an accurate cluster of observers who know about your coins.")]),Y,e("p",null,[t("Every transaction must specify a fee which incentives the miner to include it in a block, it is calculated by "),X,t(". The higher the fee per virtual byte (vByte) transaction size, the more likely miners are to confirm this transaction. Wasabi uses Bitcoin Core's "),J,t(" algorithm to estimate the time it will take to confirm at the given fee level. You can change the fee by moving the slider, or by manually setting the "),n(a,{to:"/FAQ/FAQ-UseWasabi.html#how-do-i-set-custom-fee-rate"},{default:i(()=>[t("transaction fee rate")]),_:1}),t(".")]),Q,D,e("div",$,[Z,ee,e("ol",null,[e("li",null,[t("Use "),e("a",te,[t("a mempool monitor"),n(s)]),t(" (available "),e("a",ne,[t("Tor onion website"),n(s)]),t(") to see what fees are likely to get a transaction to be confirmed in the next block.")]),ie]),e("p",null,[t("For a deeper dive into the fee estimation process, "),e("a",oe,[t("this article"),n(s)]),t(" is worth reading.")])]),ae,e("p",null,[t("Since Wasabi version "),e("a",se,[t("2.0.4"),n(s)]),t(" the "),le,t(" dialog contains privacy suggestions. The privacy suggestions help the user to improve their transaction. They are displayed when hovering over the triangle or shield in the top right corner. The suggestions are based on the current coin selection for this transaction. For example, the suggestions will warn the user when the transaction contains non-private coins.")]),re,e("p",null,[t("In order to spend a coin, the transaction must be signed by the private key corresponding to that coin. Wasabi stores a secret on the computer, encrypted with the password that you specified during the "),n(a,{to:"/using-wasabi/WalletGeneration.html#important-info-about-your-wallet-password"},{default:i(()=>[t("wallet generation")]),_:1}),t(". To spend a coin you need to type in the password, which decrypts the encrypted secret, and then derive the child private key that signs the transaction. Afterwards, the password is wiped from memory.")]),ce,he,e("p",null,[t("If for some reason the first broadcast fails, then if you have Wasabi connected to "),n(a,{to:"/using-wasabi/BitcoinFullNode.html"},{default:i(()=>[t("your own Bitcoin full node")]),_:1}),t(" this node will broadcast the transaction to the network. If this also fails, then the transaction is sent to the backend coordinator with a new Tor identity, who then broadcasts the transaction to the network.")]),de,ue,e("p",null,[t("Since Wasabi version "),e("a",pe,[t("2.0.4"),n(s)]),t(" it is possible to easily speed up or cancel a pending transaction. Speeding up and cancelling are similar to each other, the main difference being that a "),me,t(` will send the coins to a new address owned by the user/wallet (this is all done automatically). The transaction is then "cancelled" because the bitcoin (minus the fees) is returned to the user's wallet.`)]),ge,e("p",null,[t("Wasabi first tries to utilize "),n(a,{to:"/using-wasabi/glossary/Glossary-GeneralBitcoin.html#replace-by-fee-rbf"},{default:i(()=>[t("RBF")]),_:1}),t(", if that's not possible it tries to do "),n(a,{to:"/using-wasabi/glossary/Glossary-GeneralBitcoin.html#child-pays-for-parent-cpfp"},{default:i(()=>[t("CPFP")]),_:1}),t(".")]),be,fe,ye,_e,e("p",null,[e("a",ve,[we,n(s)])])])}const Pe=g(x,[["render",ke],["__file","Send.html.vue"]]),Fe=JSON.parse('{"path":"/using-wasabi/Send.html","title":"Send","lang":"en-US","frontmatter":{"title":"Send","description":"A step-by-step guide on how to send bitcoin in Wasabi. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."},"headers":[{"level":2,"title":"How to send bitcoin step-by-step","slug":"how-to-send-bitcoin-step-by-step","link":"#how-to-send-bitcoin-step-by-step","children":[]},{"level":2,"title":"Coins","slug":"coins","link":"#coins","children":[]},{"level":2,"title":"Clusters","slug":"clusters","link":"#clusters","children":[]},{"level":2,"title":"Anonymity Set","slug":"anonymity-set","link":"#anonymity-set","children":[]},{"level":2,"title":"Receiving Address","slug":"receiving-address","link":"#receiving-address","children":[]},{"level":2,"title":"Observers","slug":"observers","link":"#observers","children":[]},{"level":2,"title":"Amount","slug":"amount","link":"#amount","children":[]},{"level":2,"title":"Mining Fee","slug":"mining-fee","link":"#mining-fee","children":[]},{"level":2,"title":"Privacy Suggestions","slug":"privacy-suggestions","link":"#privacy-suggestions","children":[]},{"level":2,"title":"Password","slug":"password","link":"#password","children":[]},{"level":2,"title":"Broadcast","slug":"broadcast","link":"#broadcast","children":[]},{"level":2,"title":"Speed Up or Cancel Transaction","slug":"speed-up-or-cancel-transaction","link":"#speed-up-or-cancel-transaction","children":[]}],"git":{"updatedTime":1714438333000},"filePathRelative":"using-wasabi/Send.md"}');export{Pe as comp,Fe as data};
