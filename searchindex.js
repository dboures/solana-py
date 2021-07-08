Search.setIndex({docnames:["api","index","solana","spl"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["api.rst","index.rst","solana.rst","spl.rst"],objects:{"":{solana:[1,0,0,"-"]},"solana.account":{Account:[2,1,1,""]},"solana.account.Account":{keypair:[2,2,1,""],public_key:[2,2,1,""],secret_key:[2,2,1,""],sign:[2,2,1,""]},"solana.blockhash":{Blockhash:[2,3,1,""]},"solana.instruction":{InstructionLayout:[2,1,1,""],decode_data:[2,3,1,""],encode_data:[2,3,1,""]},"solana.instruction.InstructionLayout":{fmt:[2,4,1,""],idx:[2,4,1,""]},"solana.message":{CompiledInstruction:[2,1,1,""],Message:[2,1,1,""],MessageArgs:[2,1,1,""],MessageHeader:[2,1,1,""]},"solana.message.CompiledInstruction":{accounts:[2,4,1,""],data:[2,4,1,""],program_id_index:[2,4,1,""]},"solana.message.Message":{deserialize:[2,2,1,""],is_account_writable:[2,2,1,""],serialize:[2,2,1,""]},"solana.message.MessageArgs":{account_keys:[2,4,1,""],header:[2,4,1,""],instructions:[2,4,1,""],recent_blockhash:[2,4,1,""]},"solana.message.MessageHeader":{num_readonly_signed_accounts:[2,4,1,""],num_readonly_unsigned_accounts:[2,4,1,""],num_required_signatures:[2,4,1,""]},"solana.publickey":{PublicKey:[2,1,1,""]},"solana.publickey.PublicKey":{LENGTH:[2,4,1,""],create_program_address:[2,2,1,""],create_with_seed:[2,2,1,""],find_program_address:[2,2,1,""],to_base58:[2,2,1,""]},"solana.rpc":{api:[0,0,0,"-"],commitment:[0,0,0,"-"],types:[0,0,0,"-"]},"solana.rpc.api":{Client:[0,1,1,""]},"solana.rpc.api.Client":{get_account_info:[0,2,1,""],get_balance:[0,2,1,""],get_block_commitment:[0,2,1,""],get_block_time:[0,2,1,""],get_cluster_nodes:[0,2,1,""],get_confirmed_block:[0,2,1,""],get_confirmed_blocks:[0,2,1,""],get_confirmed_signature_for_address2:[0,2,1,""],get_confirmed_transaction:[0,2,1,""],get_epoch_info:[0,2,1,""],get_epoch_schedule:[0,2,1,""],get_fee_calculator_for_blockhash:[0,2,1,""],get_fee_rate_governor:[0,2,1,""],get_fees:[0,2,1,""],get_first_available_block:[0,2,1,""],get_genesis_hash:[0,2,1,""],get_identity:[0,2,1,""],get_inflation_governor:[0,2,1,""],get_inflation_rate:[0,2,1,""],get_largest_accounts:[0,2,1,""],get_leader_schedule:[0,2,1,""],get_minimum_balance_for_rent_exemption:[0,2,1,""],get_minimum_ledger_slot:[0,2,1,""],get_program_accounts:[0,2,1,""],get_recent_blockhash:[0,2,1,""],get_signature_statuses:[0,2,1,""],get_signatures_for_address:[0,2,1,""],get_slot:[0,2,1,""],get_slot_leader:[0,2,1,""],get_stake_activation:[0,2,1,""],get_supply:[0,2,1,""],get_token_account_balance:[0,2,1,""],get_token_accounts_by_delegate:[0,2,1,""],get_token_accounts_by_owner:[0,2,1,""],get_token_largest_accounts:[0,2,1,""],get_token_supply:[0,2,1,""],get_transaction_count:[0,2,1,""],get_version:[0,2,1,""],get_vote_accounts:[0,2,1,""],is_connected:[0,2,1,""],request_airdrop:[0,2,1,""],send_raw_transaction:[0,2,1,""],send_transaction:[0,2,1,""],set_log_filter:[0,2,1,""],simulate_transaction:[0,2,1,""],validator_exit:[0,2,1,""]},"solana.rpc.commitment":{Commitment:[0,3,1,""],Max:[0,5,1,""],Recent:[0,5,1,""],Root:[0,5,1,""],Single:[0,5,1,""]},"solana.rpc.providers":{base:[0,0,0,"-"],http:[0,0,0,"-"]},"solana.rpc.providers.base":{BaseProvider:[0,1,1,""]},"solana.rpc.providers.base.BaseProvider":{is_connected:[0,2,1,""],make_request:[0,2,1,""]},"solana.rpc.providers.http":{HTTPProvider:[0,1,1,""],get_default_endpoint:[0,3,1,""]},"solana.rpc.providers.http.HTTPProvider":{is_connected:[0,2,1,""],make_request:[0,2,1,""]},"solana.rpc.types":{DataSliceOpts:[0,1,1,""],MemcmpOpts:[0,1,1,""],RPCError:[0,1,1,""],RPCMethod:[0,3,1,""],RPCResponse:[0,1,1,""],TokenAccountOpts:[0,1,1,""],TxOpts:[0,1,1,""],URI:[0,3,1,""]},"solana.rpc.types.DataSliceOpts":{length:[0,4,1,""],offset:[0,4,1,""]},"solana.rpc.types.MemcmpOpts":{bytes:[0,4,1,""],offset:[0,4,1,""]},"solana.rpc.types.RPCError":{code:[0,4,1,""],message:[0,4,1,""]},"solana.rpc.types.RPCResponse":{error:[0,4,1,""],id:[0,4,1,""],jsonrpc:[0,4,1,""],result:[0,4,1,""]},"solana.rpc.types.TokenAccountOpts":{data_slice:[0,4,1,""],encoding:[0,4,1,""],mint:[0,4,1,""],program_id:[0,4,1,""]},"solana.rpc.types.TxOpts":{preflight_commitment:[0,4,1,""],skip_confirmation:[0,4,1,""],skip_preflight:[0,4,1,""]},"solana.sysvar":{SYSVAR_CLOCK_PUBKEY:[2,5,1,""],SYSVAR_RECENT_BLOCKHASHES_PUBKEY:[2,5,1,""],SYSVAR_RENT_PUBKEY:[2,5,1,""],SYSVAR_REWARDS_PUBKEY:[2,5,1,""],SYSVAR_STAKE_HISTORY_PUBKEY:[2,5,1,""]},"solana.transaction":{AccountMeta:[2,1,1,""],NonceInformation:[2,1,1,""],PACKET_DATA_SIZE:[2,5,1,""],SIG_LENGTH:[2,5,1,""],SigPubkeyPair:[2,1,1,""],Transaction:[2,1,1,""],TransactionInstruction:[2,1,1,""],TransactionSignature:[2,3,1,""]},"solana.transaction.AccountMeta":{is_signer:[2,4,1,""],is_writable:[2,4,1,""],pubkey:[2,4,1,""]},"solana.transaction.NonceInformation":{nonce:[2,4,1,""],nonce_instruction:[2,4,1,""]},"solana.transaction.Transaction":{add:[2,2,1,""],add_signature:[2,2,1,""],add_signer:[2,2,1,""],compile_message:[2,2,1,""],deserialize:[2,2,1,""],populate:[2,2,1,""],serialize:[2,2,1,""],serialize_message:[2,2,1,""],sign:[2,2,1,""],sign_partial:[2,2,1,""],signature:[2,2,1,""],verify_signatures:[2,2,1,""]},"solana.transaction.TransactionInstruction":{data:[2,4,1,""],keys:[2,4,1,""],program_id:[2,4,1,""]},"solana.utils":{helpers:[2,0,0,"-"],shortvec_encoding:[2,0,0,"-"]},"solana.utils.helpers":{from_uint8_bytes:[2,3,1,""],to_uint8_bytes:[2,3,1,""]},"solana.utils.shortvec_encoding":{decode_length:[2,3,1,""],encode_length:[2,3,1,""]},"spl.token":{client:[3,0,0,"-"],constants:[3,0,0,"-"],instructions:[3,0,0,"-"]},"spl.token.client":{AccountInfo:[3,1,1,""],MintInfo:[3,1,1,""],Token:[3,1,1,""]},"spl.token.client.AccountInfo":{amount:[3,4,1,""],close_authority:[3,4,1,""],delegate:[3,4,1,""],delegated_amount:[3,4,1,""],is_frozen:[3,4,1,""],is_initialized:[3,4,1,""],is_native:[3,4,1,""],mint:[3,4,1,""],owner:[3,4,1,""],rent_exempt_reserve:[3,4,1,""]},"spl.token.client.MintInfo":{decimals:[3,4,1,""],freeze_authority:[3,4,1,""],is_initialized:[3,4,1,""],mint_authority:[3,4,1,""],supply:[3,4,1,""]},"spl.token.client.Token":{approve2:[3,2,1,""],approve:[3,2,1,""],burn2:[3,2,1,""],burn:[3,2,1,""],close_account:[3,2,1,""],create_account:[3,2,1,""],create_associated_token_account:[3,2,1,""],create_mint:[3,2,1,""],create_multisig:[3,2,1,""],create_wrapped_native_account:[3,2,1,""],freeze_account:[3,2,1,""],get_account_info:[3,2,1,""],get_accounts:[3,2,1,""],get_balance:[3,2,1,""],get_min_balance_rent_for_exempt_for_account:[3,2,1,""],get_min_balance_rent_for_exempt_for_mint:[3,2,1,""],get_min_balance_rent_for_exempt_for_multisig:[3,2,1,""],get_mint_info:[3,2,1,""],mint_to2:[3,2,1,""],mint_to:[3,2,1,""],payer:[3,4,1,""],program_id:[3,4,1,""],pubkey:[3,4,1,""],revoke:[3,2,1,""],set_authority:[3,2,1,""],thaw_account:[3,2,1,""],transfer2:[3,2,1,""],transfer:[3,2,1,""]},"spl.token.constants":{ACCOUNT_LEN:[3,5,1,""],ASSOCIATED_TOKEN_PROGRAM_ID:[3,5,1,""],MINT_LEN:[3,5,1,""],MULTISIG_LEN:[3,5,1,""],TOKEN_PROGRAM_ID:[3,5,1,""],WRAPPED_SOL_MINT:[3,5,1,""]},"spl.token.instructions":{Approve2Params:[3,1,1,""],ApproveParams:[3,1,1,""],AuthorityType:[3,1,1,""],Burn2Params:[3,1,1,""],BurnParams:[3,1,1,""],CloseAccountParams:[3,1,1,""],FreezeAccountParams:[3,1,1,""],InitializeAccountParams:[3,1,1,""],InitializeMintParams:[3,1,1,""],InitializeMultisigParams:[3,1,1,""],MintTo2Params:[3,1,1,""],MintToParams:[3,1,1,""],RevokeParams:[3,1,1,""],SetAuthorityParams:[3,1,1,""],ThawAccountParams:[3,1,1,""],Transfer2Params:[3,1,1,""],TransferParams:[3,1,1,""],approve2:[3,3,1,""],approve:[3,3,1,""],burn2:[3,3,1,""],burn:[3,3,1,""],close_account:[3,3,1,""],create_associated_token_account:[3,3,1,""],decode_approve2:[3,3,1,""],decode_approve:[3,3,1,""],decode_burn2:[3,3,1,""],decode_burn:[3,3,1,""],decode_close_account:[3,3,1,""],decode_freeze_account:[3,3,1,""],decode_initialize_account:[3,3,1,""],decode_initialize_mint:[3,3,1,""],decode_initialize_multisig:[3,3,1,""],decode_mint_to2:[3,3,1,""],decode_mint_to:[3,3,1,""],decode_revoke:[3,3,1,""],decode_set_authority:[3,3,1,""],decode_thaw_account:[3,3,1,""],decode_transfer2:[3,3,1,""],decode_transfer:[3,3,1,""],freeze_account:[3,3,1,""],get_associated_token_address:[3,3,1,""],initialize_account:[3,3,1,""],initialize_mint:[3,3,1,""],initialize_multisig:[3,3,1,""],mint_to2:[3,3,1,""],mint_to:[3,3,1,""],revoke:[3,3,1,""],set_authority:[3,3,1,""],thaw_account:[3,3,1,""],transfer2:[3,3,1,""],transfer:[3,3,1,""]},"spl.token.instructions.Approve2Params":{amount:[3,4,1,""],decimals:[3,4,1,""],delegate:[3,4,1,""],mint:[3,4,1,""],owner:[3,4,1,""],program_id:[3,4,1,""],signers:[3,4,1,""],source:[3,4,1,""]},"spl.token.instructions.ApproveParams":{amount:[3,4,1,""],delegate:[3,4,1,""],owner:[3,4,1,""],program_id:[3,4,1,""],signers:[3,4,1,""],source:[3,4,1,""]},"spl.token.instructions.AuthorityType":{ACCOUNT_OWNER:[3,4,1,""],CLOSE_ACCOUNT:[3,4,1,""],FREEZE_ACCOUNT:[3,4,1,""],MINT_TOKENS:[3,4,1,""]},"spl.token.instructions.Burn2Params":{account:[3,4,1,""],amount:[3,4,1,""],decimals:[3,4,1,""],mint:[3,4,1,""],owner:[3,4,1,""],program_id:[3,4,1,""],signers:[3,4,1,""]},"spl.token.instructions.BurnParams":{account:[3,4,1,""],amount:[3,4,1,""],mint:[3,4,1,""],owner:[3,4,1,""],program_id:[3,4,1,""],signers:[3,4,1,""]},"spl.token.instructions.CloseAccountParams":{account:[3,4,1,""],dest:[3,4,1,""],owner:[3,4,1,""],program_id:[3,4,1,""],signers:[3,4,1,""]},"spl.token.instructions.FreezeAccountParams":{account:[3,4,1,""],mint:[3,4,1,""],owner:[3,4,1,""],program_id:[3,4,1,""],signers:[3,4,1,""]},"spl.token.instructions.InitializeAccountParams":{account:[3,4,1,""],mint:[3,4,1,""],owner:[3,4,1,""],program_id:[3,4,1,""]},"spl.token.instructions.InitializeMintParams":{decimals:[3,4,1,""],freeze_authority:[3,4,1,""],mint:[3,4,1,""],mint_authority:[3,4,1,""],program_id:[3,4,1,""]},"spl.token.instructions.InitializeMultisigParams":{m:[3,4,1,""],multisig:[3,4,1,""],program_id:[3,4,1,""],signers:[3,4,1,""]},"spl.token.instructions.MintTo2Params":{amount:[3,4,1,""],decimals:[3,4,1,""],dest:[3,4,1,""],mint:[3,4,1,""],mint_authority:[3,4,1,""],program_id:[3,4,1,""],signers:[3,4,1,""]},"spl.token.instructions.MintToParams":{amount:[3,4,1,""],dest:[3,4,1,""],mint:[3,4,1,""],mint_authority:[3,4,1,""],program_id:[3,4,1,""],signers:[3,4,1,""]},"spl.token.instructions.RevokeParams":{delegate:[3,4,1,""],owner:[3,4,1,""],program_id:[3,4,1,""],signers:[3,4,1,""]},"spl.token.instructions.SetAuthorityParams":{account:[3,4,1,""],authority:[3,4,1,""],current_authority:[3,4,1,""],new_authority:[3,4,1,""],program_id:[3,4,1,""],signers:[3,4,1,""]},"spl.token.instructions.ThawAccountParams":{account:[3,4,1,""],mint:[3,4,1,""],owner:[3,4,1,""],program_id:[3,4,1,""],signers:[3,4,1,""]},"spl.token.instructions.Transfer2Params":{amount:[3,4,1,""],decimals:[3,4,1,""],dest:[3,4,1,""],mint:[3,4,1,""],owner:[3,4,1,""],program_id:[3,4,1,""],signers:[3,4,1,""],source:[3,4,1,""]},"spl.token.instructions.TransferParams":{amount:[3,4,1,""],dest:[3,4,1,""],owner:[3,4,1,""],program_id:[3,4,1,""],signers:[3,4,1,""],source:[3,4,1,""]},solana:{account:[2,0,0,"-"],blockhash:[2,0,0,"-"],instruction:[2,0,0,"-"],message:[2,0,0,"-"],publickey:[2,0,0,"-"],sysvar:[2,0,0,"-"],transaction:[2,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","attribute","Python attribute"],"5":["py","data","Python data"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:attribute","5":"py:data"},terms:{"0000000000000005c49ae77603782054f17a9decea43b444eba0":2,"000000301020200010c02000000e803000000000000":2,"019d53be8af3a7c30f86c1092d2c3ea61d270c0cfa2":2,"019d53be8af3a7c30f86c1092d2c3ea61d270c0cfa275a23ba504674c8fbbb724827b23b42dc8e08019e23120f1b6f40f9799355ce54185b4415be37ca2cee6e0e010001034cb5abf6ad79fbf5abbccafcc269d85cd2651ed4b885b5869f241aedf0a5ba2900000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000301020200010c02000000e803000000000000":2,"020000007b00000000000000":2,"0200030500000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000300000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000005c49ae77603782054f17a9decea43b444eba0edb12c6f1d31c6e0e4a84bf052eb010403010203050909090909":2,"120f1b6f40f9799355ce54185b4415be37ca2cee6e0":2,"13lefbg6m2ep1fqcj9k66fcxsothmmtgr7c78aivuryd":0,"14fut96s9swbmh7zjpdvfedywnayy9zanhv4xvezysgu":0,"236zsa5w4navulxxhk1mqibubxknbu84x6cflbh1v6zjprlfyecz4zdedofbazfhs4gdwzsmij9vkaso2tr5ltgg":0,"2kw2xrd9kwqet15aha2ok3tyvd3nwbtfh1mbirav1be1":0,"2r9jlfiaq9bgdcw6h8s44439":0,"37u9wtqpcm6ula3vmtgtkebctymxq84mk82trvkdfewj3raliptazumj1yovsfamarmzyp7q":0,"39pjzwspn59k2puhqhb7xnybngfxcfvkxlerthpbv4tj":0,"3bhbma5vw3np5ajazuacidrn4xpzgwhcxigmjwhmbg5":0,"3bxs4bc3vyugvb19":0,"3d91zlqprlamwjfgr5zymkqb4c18gsjnasdmb6b2wlhw":0,"3mc6vr":0,"3ptgyh77lhhqqtxp4smdvj85hmdiewsgxcubn14v7gyyvypjzzyguqhtk3bstynfa48vcm1rmwy7zwl3j1evkmei":0,"4htxmbek1qyzo9kjxezodegrkhykdtwdiquarxz5vcow":2,"4hxtckrzt9wyecnzv1xpgcdfgazzqknxlxgynz5qduwwpsazbzshptvwrl3bjcvzuxrdkvhl2b7ygrrqcwyaqsabcncvg7bf":0,"4nd1mbqtrmjvyvfkf2pjy9nzuzdtasp7d4xwls4gdb4t":0,"4u3rfq7x5klg6tz9kcksfl8oxegnjtuun1yfkvkxbs5x":0,"5332fcad":0,"5cbvgbky6kbaitvmsqpxthj2oqitbyucax9zm2zmuv4i":0,"5j7s6nijs3jakvgkoc18wvasisaci2pxb2a6uecjp4tpra2tfg9wsytleyouxpbjemzjinentkpa52ystrw5dia7":0,"5mmcr4nbtzqjthjlgywmet66iwe9j9f7kjtxzjjwfux2":0,"5verv8nmvzbjmekv8xnrlkeawrtsz9coskdyjcjjbrnbjlgp8uirbgmqpjkhor4tjf3zprzrfmbv6ujkdiszkquw":0,"63jnpmcs7tnncjntqurx7mvqc5cbjmtvklxbjphuqkjxyzrquzpfhjvza7a29d9tmqvaiqc3unp1neazkffhjyq":0,"651ed4b885b5869f241aedf0a5ba290000000000000":2,"75a23ba504674c8fbbb724827b23b42dc8e08019e23":2,"7ckxv6uznfowrujkgw5bwj5rp5piktcxzeealqyd3bbm":0,"7fuajdsteugbc3sm84ckrl6yyaasstylsu4ve5oovls7":0,"7hyiu3qphu8ix1f7enq5trmaunb4v8y5lhwpwaaaaaaaaaaaaaa":0,"7oolsfw7goqslbis7c1kxjfp6of4w7ymqnhhbqycybiybkuozzhv7mcvorp3mey9ahxojtwdcdbwobaaede5j2":0,"83astbrgulmdt2h5u1tpdq5tjfoj6noegway3mdlvcri":0,"8hvqyx9jebh31q9hp8t5smvjs665979zeer3ecfzitu":0,"8pjjtv657aen9p5r2wom6ppsz385chvttytuwaejsjkq":0,"95l7asbclrsqghsi6kszkzjnbs6rqdghczkagz7bji75":0,"9b5xszugdmaxcz7usqhpzdks5zqsmwxrmzcsvtj6ns6g":0,"9huduzfxoj7wgmtffue7vh1xepqef7gyrlju9napncqa":0,"boolean":2,"byte":[0,2],"class":[0,2,3],"default":0,"final":0,"function":2,"import":[0,1,2,3],"int":[0,2,3],"new":[0,3],"null":0,"public":[0,2,3],"return":[0,2,3],"static":[2,3],"true":[0,2],"try":0,"while":2,Doing:3,The:[0,2,3],These:3,aaaaaaaaaaaaaaaaaaaaaaaaaaaag5yy9wg6fpuieuwyjd1ta7ztfpbv0orifrydcyuaegkbagiaaqwcaaaaqeipaaaaaaa:0,abn5xm:0,about:[0,3],absoluteslot:0,acc:2,access:2,account:[0,1,3],account_kei:2,account_len:3,account_own:3,accountinfo:3,accountkei:[0,2],accountmeta:2,acquir:3,activ:0,activatedstak:0,add:[0,2],add_sign:2,add_signatur:2,address:[0,2,3],addsign:2,advancenonceaccount:2,after:2,afxykhmhijxwjkyhodgeabvxmfqwpj1yds9nf:0,against:[0,3],ahb94zkuasfttdqgdfidsdnpjhkefp7zx3ymrcsxabsv:0,airdrop:0,all:[0,2,3],allow:[2,3],alreadi:0,also:[0,3],amount:[0,3],amout:0,ani:[0,2,3],anoth:[2,3],aogcwq1ubm76epmhsd5cw1es4w5econvqcfmbl6ntw1:0,api:[1,3],apnsr52ec1eh676m7qtbhuj1nrgphypv7xkpxgrdd8gx:0,appli:2,approv:[0,3],approve2:3,approve2param:3,approveparam:3,arbitari:2,arbitrari:2,arg:2,argument:2,arrai:[0,2],assert:3,assign:[2,3],associ:[0,3],associated_token_program_id:3,asynchron:0,atokengpvbdgvxr1b2hvzbsiqw5xwh25eftnslja8knl:3,atom:2,attempt:[0,3],author:3,authority_typ:3,authoritytyp:3,avail:0,aygecurrvux6gtfe4tx7aaj87xc5r5znx96ntnk1ncv:0,b58encod:2,back:0,backward:0,balanc:[0,3],bank:[0,3],baqsr194dc4dzarxattxyyewdkk7vgquy8nvnkub8hfz:0,base58:[0,2,3],base64:[0,3],base:[0,2,3],baseprovid:0,been:0,befor:[0,2],being:3,between:0,block:[0,2,3],blockchain:3,blockhash:[0,1],blockheight:0,blocktim:0,bool:[0,2,3],boot:0,bpf:0,broadcast:0,build:2,burn2:3,burn2param:3,burn:3,burnparam:3,burnperc:0,c7c8odr8oashr5feyrq2tjkaxl18id1dsj2zbkdgl2c2:0,cach:0,calcul:0,call:[0,2,3],caller:3,can:[0,2,3],cannot:[0,3],caus:2,caveat:2,certain:2,chain:3,check:[0,2],choos:0,circul:0,client:1,close:3,close_account:3,close_author:3,closeaccountparam:3,cluster:[0,3],cmwyesm2ne74mghfbvshjderf7xmykshwwm6vgh6gfqxzx8lfbfup5ruccumfhtguha6seuhppihzzhuqxzq2kn:0,code:0,collect:3,com:1,combin:2,commiss:0,commit:[0,2,3],compact:2,compar:0,comparison:0,compil:2,compile_messag:2,compiledinstruct:2,complet:2,comput:0,config:0,configur:0,confirm:[0,2,3],conn:3,connect:3,consid:2,constant:2,constructor:2,consum:2,consumpt:2,contain:2,content:1,context:0,control:3,convent:2,convert:2,core:0,correspond:[0,2],cost:0,count:0,cover:2,creat:[2,3],create_account:3,create_associated_token_account:3,create_mint:3,create_multisig:3,create_program_address:2,create_with_se:2,create_wrapped_native_account:3,createinstruct:3,creation:3,current:[0,2,3],current_author:3,curv:2,cv7qh8zoqeustqagosgpklptxoojf9ycszxkrx1jtd12:0,cxelqur1gpp8whe33gz4qxqgb3sz9rswsj2kshvewkfi:0,data:[0,2,3],data_s:0,data_slic:0,dataclass:2,datasliceopt:0,debug:0,decim:[0,3],decod:[2,3],decode_approv:3,decode_approve2:3,decode_burn2:3,decode_burn:3,decode_close_account:3,decode_data:2,decode_freeze_account:3,decode_initialize_account:3,decode_initialize_mint:3,decode_initialize_multisig:3,decode_length:2,decode_mint_to2:3,decode_mint_to:3,decode_revok:3,decode_set_author:3,decode_thaw_account:3,decode_transf:3,decode_transfer2:3,deleg:[0,3],delegated_amount:3,delinqu:0,deploi:3,deriv:[2,3],descend:0,deseri:2,desir:0,dest:3,destin:3,detail:0,detect:0,devnet:1,differ:3,digit:3,direct:0,directli:3,disabl:0,doe:[0,3],doing:2,dpqpgolqvu3aq72heqsmsb9qh4koxc9fgepvgeuiwnp6:0,dure:3,dv1lfzjvdf7s1fbkpfgkokxk5yososmkadfbxbo1gqj:0,dxa0zogl6cejvcjlgan1rczlwqvxvjl4:0,e010001034cb5abf6ad79fbf5abbccafcc269d85cd2:2,e1430c6ebd0d53573b5c803452174f8991ef5955e0906a09e8fdc7310459e9c82a402526748c3431fe7f0e5faafbf7e703234789734063ee42be17af16438d08:2,ealchog1mxq9negeuqpwatma5uueuzvzil16zivmr7eb:0,ed25519:2,edb12c6f1d31c6e0e4a84bf052eb010403010203050909090909:2,eetubp5akhgjpahzpafcb8bay1hmh639cwcftqi3hq1k:2,either:[0,3],ekaar3bmquzvgsonq7vcpf2npacyowbnat44fpafw8po:0,eligbl:2,empti:3,enabl:0,encod:[0,2,3],encode_data:2,encode_length:2,end:0,end_slot:0,endpoint:0,epoch:0,epochcredit:0,epochvoteaccount:0,erc20:3,err:0,error:0,estim:0,etfdyz7cg5p9sdfmdprerjbn5pukk7xydebzzgm2v4ai:0,ewf9gtehrrvpuonticgmieadawzn4xen8bnanvbks6s2:0,ewj2cueuvhi7rx81cnay3tzpyfwnhzzvwvutyfmxmhs3:0,execut:[0,2],exempt:[0,3],exit:0,expir:0,explicit:[0,3],extern:2,failur:0,fall:[0,2],fals:[0,3],fee:[0,2,3],feecalcul:0,feerategovernor:0,fetch:0,field:[0,2],fill:2,filter:[0,3],filter_opt:0,find:2,find_program_address:2,first:2,firstnormalepoch:0,firstnormalslot:0,fix:3,flag:3,fmt:2,follow:[0,2],form:2,format:[0,2],found:[0,3],foundat:0,foundationterm:0,freez:3,freeze_account:3,freeze_author:3,freezeaccountparam:3,from:[0,1,2,3],from_pubkei:[0,2],from_public_kei:2,from_uint8_byt:2,fromhex:2,frozen:3,full:3,full_signed_tx_str:0,fulli:0,fungibl:3,further:3,fwcsknptgtmlccxaa9ygnivvfk95mkzeclt1dnpi3sdr:0,fz9s7x9jmbcamyjjrfsobhfyarumvwvx7hwre4lnzhsg:0,gener:[1,2],genesi:0,get:[0,2,3],get_account:3,get_account_info:[0,3],get_associated_token_address:3,get_bal:[0,3],get_block_commit:0,get_block_tim:0,get_cluster_nod:0,get_confirmed_block:0,get_confirmed_signature_for_address2:0,get_confirmed_transact:0,get_default_endpoint:0,get_epoch_info:0,get_epoch_schedul:0,get_fe:0,get_fee_calculator_for_blockhash:0,get_fee_rate_governor:0,get_first_available_block:0,get_genesis_hash:0,get_ident:0,get_inflation_governor:0,get_inflation_r:0,get_largest_account:0,get_leader_schedul:0,get_min_balance_rent_for_exempt_for_account:3,get_min_balance_rent_for_exempt_for_mint:3,get_min_balance_rent_for_exempt_for_multisig:3,get_minimum_balance_for_rent_exempt:0,get_minimum_ledger_slot:0,get_mint_info:3,get_program_account:0,get_recent_blockhash:0,get_signature_status:0,get_signatures_for_address:0,get_slot:0,get_slot_lead:0,get_stake_activ:0,get_suppli:0,get_token_account_bal:0,get_token_accounts_by_deleg:0,get_token_accounts_by_own:0,get_token_largest_account:0,get_token_suppli:0,get_transaction_count:0,get_vers:0,get_vote_account:0,ggs6aedqjf5iru6d6vqnherez2hckgaebivdfszkg4gd:0,ggs8w9snuts67bsh3eqkpxlum5umhfd7zbe9gharjbnqmlj1qd3spr6omtbu6ehdb4rd8cp2xuxr2u3d6fos36pd98xs6ox8:0,given:3,gk2zqssxla2rwvzk347ryhh6jjprsca69fjlw93zgi3b:0,gossip:0,governor:0,grant:3,guarante:0,gwgqq4udvxe3unxrhewvftthwpemphad8jr9uzahbr2:0,gxyrkp2evkacassnso4vlsajzkmhsfxhwufs3a5ctima:0,h1wdvj5hjc1szhhowtaycpzqpfbsl7g8pearv3obksh:0,has:[0,3],hash:[0,2],have:[0,2],hbz5ffmkwnhc7uwk6tf1hvi6tcs7dtyfdjecupggzfag:0,hc36wh1zqygzgansjwnt9r2gy3h9n89udpxzpsmesie3:0,header:[0,2],health:0,hello:2,helper:2,here:2,hex:2,hifjzpr7e5kv2tdu9jte4fbh1x8z9syia3uadadx18b5:0,highest:0,histori:2,hold:3,how:2,http:[0,1],http_client:1,httpprovid:0,human:[0,3],ident:0,identifi:[0,2,3],idx:2,immedi:2,implement:[0,3],inact:0,includ:[0,2,3],incorpor:0,increas:0,index:[1,2],indic:2,inflat:0,info:0,inform:[0,3],initi:[0,3],initialize_account:3,initialize_mint:3,initialize_multisig:3,initializeaccountparam:3,initializemintparam:3,initializemultisigparam:3,input:2,insid:0,instruct:[0,1],instructionlayout:2,integ:[0,2],interact:[0,3],interfac:[1,2,3],invalid:2,invok:2,involv:0,is_account_writ:2,is_connect:0,is_deleg:3,is_frozen:3,is_initi:3,is_n:3,is_sign:2,is_writ:2,iter:2,its:[0,3],j7v9ndmcobuo9to2mnheglnbkc9x3savbqbjo5mmjrn1:0,json:[0,1,3],jsonpars:[0,3],jsonpras:0,jsonrpc:0,kei:[0,2,3],keypair:2,lamport:[0,2,3],lamportspersignatur:0,largest:0,last:[0,2],lastvalidslot:0,lastvot:0,later:2,latest:0,layout:2,leader:0,leaderscheduleslotoffset:0,least:0,ledger:[0,2],length:[0,2,3],less:0,level:0,lg0arxxrumplxz29l2n8qtiwiy3imx5ba9f9k8poq0z3:0,librari:[1,2],like:3,limit:0,list:0,ljvebm78ufaikbfxqtj4rniaecui7xqtz9k3qm3dzpk:0,load:2,local:[0,3],localhost:0,locat:3,log:[0,3],log_filt:0,lowest:0,mai:[0,2,3],mainnet:3,make:0,make_request:0,manag:2,mani:2,match:[0,2],max:0,max_lockout_histori:0,max_recent_blockhash:0,maximum:[0,2,3],maxlamportspersignatur:0,memcmp_opt:0,memcmpopt:0,memo:0,messag:[0,1],messagearg:2,messagehead:2,messeg:2,meta:0,metadata:2,method:[0,2,3],minimum:[0,3],minlamportspersignatur:0,mint:[0,3],mint_account:3,mint_author:3,mint_len:3,mint_to2:3,mint_to:3,mint_token:3,minter:3,mintinfo:3,mintto2:3,mintto2param:3,minttoparam:3,modifi:2,modul:[1,2],more:[0,2,3],most:[0,3],msg:2,multi_sign:3,multipl:2,multisig:3,multisig_account:3,multisig_len:3,multisignatur:3,multsig:3,must:[0,2,3],nacl:2,nativ:3,need:2,network:2,new_author:3,new_typ:[0,3],newli:3,newtyp:[0,3],node:0,nodepubkei:0,non:3,nonc:2,nonce_instruct:2,nonceinform:2,noncircul:0,noncirculatingaccount:0,none:[0,2,3],num_readonly_signed_account:2,num_readonly_unsigned_account:2,num_required_signatur:2,number:[2,3],numreadonlysignedaccount:[0,2],numreadonlyunsignedaccount:0,numrequiredsignatur:0,object:[0,2,3],off:2,offset:0,older:0,one:[0,2,3],onli:[0,2,3],onward:0,opt:[0,3],optimist:0,option:[0,2,3],optoin:0,orbj3juqrbaa:0,order:[0,2],other:3,otherwis:3,out:[0,3],over:[0,2],own:[0,3],owner:[0,3],ownership:3,packag:2,packet_data_s:2,page:1,pair:2,parallel:3,param:[0,2,3],paramet:[0,2,3],parentslot:0,pars:[0,2,3],parser:[0,3],parti:3,partial:2,partial_sign:2,particip:0,particular:[0,3],pass:2,payer:[2,3],perform:[0,3],permiss:3,pip:1,place:3,plu:0,popul:2,postbal:0,prebal:0,preflight:0,preflight_commit:0,present:3,previous:2,previousblockhash:0,primari:2,privat:2,process:0,product:0,program:[0,1,2],program_id:[0,2,3],program_id_index:2,programidindex:0,protocol:0,provid:[1,2,3],pubkei:[0,2,3],public_kei:[0,2],publickei:[0,1,3],purg:0,python:[1,2],queri:[0,3],rang:[2,3],rate:0,raw:2,raw_data:2,raw_messag:2,raw_transact:2,reach:0,read:2,readabl:[0,3],receiv:[0,3],recent:[0,2],recent_blockhash:2,recentblockhash:[0,2],reciev:[0,2],referenc:2,reject:2,releas:0,remain:3,remov:3,rent:[0,3],rent_exempt_reserv:3,rentepoch:0,replai:0,repres:2,represent:2,request:[0,3],request_airdrop:0,requir:[0,2,3],reserv:3,resourc:2,respons:0,result:[0,2,3],retain:0,retriev:3,revok:3,revokeparam:3,reward:[0,2],right:3,root:0,rootslot:0,rpc:[1,3],rpcerror:0,rpcmethod:0,rpcrespons:[0,3],run:0,runtim:3,same:3,schedul:0,sealevel:3,search:[0,1],search_transaction_histori:0,searchtransactionhistori:0,second:[0,3],secret:2,secret_kei:2,seed:2,send:0,send_raw_transact:0,send_transact:0,sender:[0,2],sequenc:2,seri:0,serial:[0,2],serialize_messag:2,serv:2,set:[0,3],set_author:3,set_log_filt:0,setauthor:3,setauthorityparam:3,shortvec:2,shortvec_encod:2,should:2,sig_length:2,sig_verifi:0,sign:[0,2,3],sign_parti:2,signatur:[0,2,3],signed_msg:2,signedmessag:2,signer:[0,2,3],signer_verifi:0,signparti:2,sigpubkeypair:2,simul:0,simulate_transact:0,singl:0,singlegossip:[0,3],size:[0,2],skip:[0,3],skip_confirm:[0,3],skip_preflight:0,slot:0,slotindex:0,slotsinepoch:0,slotsperepoch:0,slow:[0,3],so11111111111111111111111111111111111111112:3,sol:3,solana:0,solana_cli:0,solana_cor:0,sourc:[0,2,3],special:3,specif:[0,3],specifi:[0,2,3],spl:[0,1],stake:[0,2],standard:2,start:0,start_slot:0,state:[0,2,3],statu:0,status:0,str:[0,2,3],string:[0,2],submit:0,succe:2,success:0,successfulli:0,supermajor:0,suppli:[0,3],support:[0,3],synthet:2,system:3,system_program:[0,2],sysvar:1,sysvar_clock_pubkei:2,sysvar_recent_blockhashes_pubkei:2,sysvar_rent_pubkei:2,sysvar_rewards_pubkei:2,sysvar_stake_history_pubkei:2,sysvarc1ock11111111111111111111111111111111:[0,2],sysvarrecentb1ockhashes11111111111111111111:2,sysvarrent111111111111111111111111111111111:2,sysvarrewards111111111111111111111111111111:2,sysvars1othashes111111111111111111111111111:0,sysvarstakehistory1111111111111111111111111:2,t3zhragsup0l47e24tafugaaaabqfvfxjhdmkovmoyar1etoteukobs21cc1vbiqaaaaahyugdnxr0u3xnditr072z2dvec9eqq:0,taper:0,target:3,targetlamportspersignatur:0,targetsignaturesperslot:0,termin:0,test:[2,3],than:0,thaw:3,thaw_account:3,thawaccountparam:3,them:3,thi:[0,2,3],third:3,thread:0,time:[0,2],to_base58:2,to_pubkei:[0,2],to_uint8_byt:2,token:[0,1],token_program_id:3,tokenaccountopt:0,tokenkegqfezyinwajbnbgkpfxcwubvf9ss623vq5da:3,top:0,total:[0,3],totalstak:0,tpu:0,tqjlpsmwncs5damid4nnnr8nbfyghgcwvcvifvwva8b8tjxe1aiyiv2l429bcwfyzame5szw8rdb14necqhhzbtnqfxhcp2t:0,transact:[0,1,3],transactioninstruct:[2,3],transactionsignatur:2,transfer2:3,transfer2param:3,transfer:[0,2,3],transfer_layout:2,transfer_tx:2,transferparam:[0,2,3],treat:3,tupl:2,two:3,tx_sig:0,tx_str:0,txn:0,txopt:0,type:[1,2,3],u16:2,u64:0,uiamount:0,uint8:2,uk6gblbhntegjgmwn36d5brtrkg4at8r7q162tlnjzqnhuzvl9r6byzvfrttrhmkmno6fp4vqelzl4airico61u:0,unencrypt:2,uniniti:3,union:[0,2],unless:0,unsign:2,unspecifi:0,unstabl:[0,3],until:[2,3],updat:3,uphold:0,upstream:2,uri:0,use:[0,3],used:[0,2,3],useful:3,user:3,using:[0,3],usiz:0,utf:2,util:[1,3],v1bk8xcapbzagd7tb1k53pmdi6tbge5clcgx8cmz4bj63znva6ca2qaxfpbfdvmpofq51vorbjifkbgltdhwpqn:0,val:2,valid:[0,2,3],validator_exit:0,valu:[0,2,3],verifi:[0,2],verify_signatur:2,version:0,via:3,vote111111111111111111111111111111111111111:0,vote:0,votepubkei:0,wallet:3,warmup:0,when:[0,2,3],whether:2,which:[0,2,3],wire:[0,2],within:3,wno1oaaaaaam8nsv7isdpn9e9xnl9vx7h8lujhwlopucx39dxsdx23aqqeaqidaducaaaaaqaaaaaaaaaaaaaaaaaaaiwwp5il3kg312pzvk6jt61iyfhtbtmkh:0,wrap:[0,3],wrapped_sol_mint:3,write:2,ynjho8i1vcpdp2p9cj5aa6w1cahehcqy0b1fdkomczro3qrasbaamfbq6qbwfhqf7rg02xhuesmmrutz3aujbtjkkqahpjemvfzzidx0c0robprl9rboyxhoc9:0,zero:3},titles:["API Client","Welcome to solana.py\u2019s documentation!","Solana","Solana Program Library (SPL)"],titleterms:{account:2,api:0,blockhash:2,client:[0,3],constant:3,document:1,indic:1,instal:1,instruct:[2,3],librari:3,messag:2,program:3,provid:0,publickei:2,rpc:0,solana:[1,2,3],spl:3,sysvar:2,tabl:1,token:3,transact:2,type:0,usag:1,util:2,welcom:1}})