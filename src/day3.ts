import e from "express";
import { start } from "repl";

export function day03() {

    const bags = 
    `vGFhvGvvSdfwqhqvmCPnlFPnCNPcCFcWcr
    ZbWZDMgsTHsrNNLJcJnsJl
    HbBWQgZVZZBzbgZphwjqpmmVfdGmjG
    vvCJLGnthChvtrvCCnRbTRqRPRBtbTRfPRRl
    djZSgHNNwjqcdWlbcbfc
    pFgMSfpMfzMDZFSgSjGJQQnCvMCVLnnJQLGC
    gVhQWQpcWZVwwHVvFvnnnnDFdL
    lzbPlztjltztzSjfGcPdTHLTHFCnnHCLndFGGd
    jsNbzbczclttSlfbqlljRQMJRMMpJwRZhspZgJRM
    hLJvfGcNDttSGvJtvSSJcqbqFBBWbjQqDrqbjDDjjb
    lTswlzZdssgFpdPwZpMQnCjngCCjWBQBWWQqng
    PRZMpzPZTdVZTfJvFvLFRctJcf
    JHbQtHVHHLLbTJmmZddgdgwhllMNhhhTgg
    spqpNGDjDPMhCFChMj
    DBSDDGnpSDsDWqWczcvSqWvsBtJJLLZrRVZLJRbBZNVrBHrV
    GwGhfhPhpHccvwSwrTsmsCjDmqTfbDqjss
    tQntQcNRJMFnnVQFFctJqCsRmsTjjbDqDlTqTbWT
    NZdVBZZNFzMFNNNvGprZcLGPGrrpcP
    SvCPLrrlCSvZLrCPPBNPRvNLQBbpmbdggQTTfpfQgpgTqbbb
    HVjHwMVwWtdMGwtwMwdhDFgbJgJqTmFMfFfmmfTTpq
    whtHVcjDtHWtsWdwVGVHthDPzRrNSsCRLrLRlZNzZSNzNR
    rjrlCCBtbtntwPPt
    FvfJHqBJQWWgWgWLwnMwMLbzvhwTTp
    WqHgWqBFgGfQgHfVdQFfVfrDllSsRSDmVmRCZZmSSSSZ
    gjnppCgGHNPrqqmFnnbr
    tGltVlJRtLRlrqcJcqZDqBJc
    VvhLlvWltWdVltRTLTfgwSjGNHhggQNQNjps
    HDWjCNfQjmwgWhcwPPVbZGcpMb
    sFltFBRRSRJBSSsBlSSnRLPZbVGMVPZpMpPZpcMrFZMc
    BLTBsstlqBRRBSvJJBsHdgdDNHCQHvbdCjQNNW
    lRGzWLZNFwJVbVVGcJ
    HqqpjPvHQnJgVgTnbdTV
    rVvjBQHQrQhCrzlzWrRlDZ
    jZjTZRSjZnhGZhzGnG
    HbnPHrCbBDMnhcrVLWWLLWWg
    MBwbCNDDptwNMttjdSnsqSRSFFdjtj
    bSfvcsNsDdccHHQm
    ljrlplvBhDHDHHHHJl
    jgpzhrzRrvhFRFrzFnWfZtTwSWZPbbqNbsTqsW
    vvCTvcDzHcgtvWjvcDcvgBCgwTdPFPpwpwmTSwwmdPwZpfZh
    rNLMNVqLGNrVsRNJNsPnGnnfnpSFGdfddndd
    VPQsMbVsPbzzvgCzgv
    wPsrqprHQQZsChZn
    cjgFLwWDlDltfLmTCnmWCnZZChCQ
    FccccSLGFwjVlfVLLtgdSPSpMpBMdMBRRdHdBp
    mQQcpmCCprrfLQqZVGqLGv
    PtsJdsMtTTTvFqLTnnqbGZ
    HjldthsHWztJzstZhBcHDDgpNpCpmrpgSD
    lCmhDljDJgWggcnh
    LdQrbdTDQGfGLPdqqFrHwRJcWRHgHBWHBJ
    sLqsGtDqdGQfSTsqtfqqVMzjCzlvllZljNpCsMMl
    CfLCZCCqqHlhSSrrtpRjpL
    mWQbnQZVTWwNdwmDSbpbrFptjDrjRj
    PJWVnTWPVnnclqqBsCCZHP
    tqvtbNCgqJSgZgZvSncrrcGjBGhcnVcR
    DswGQQQdRcjBnRDn
    sMdlFMQQpfZbvlNtZGgN
    RMlPllHtrlrlcZLsZfLcfwdDGD
    QppnQhTBgwQDJsGzLQ
    gTjnmjvphDSNMbtMbtMRHNVr
    RHHcChrVVChCWQmRnMZmnmbTbGmFnqTT
    gpzpfpszDwvDDNdwjdstnSMMHGMqvZnFTTZqbq
    DsDdpfppwHsgJdjzfdDjdssLPlRccPQQrJcchPQWWQRhlQcr
    rsrjQjnRnQZZqMmMMVqs
    WTSTdvJLvTGJTGCMGvzBBpVVqqFVzBzVmf
    tTSJhGLJbJhLJRRbHPQbnHHMrl
    GGgMgBJHWHhLWMhWhgfrhgWLzmsmlzTtzHmsmlszRtszRVlT
    bvScppfcQfcQSFCQpnPqwwTdRTvmzVssvswtddsv
    ZDpqnPbQbPPnQbFbfSPSqbQJhGrjgMZBhWLrLrBBBBJWhg
    hQCCGCNhDmGFJsTt
    fcggBBpvBSrtsRTpRmpD
    wflWlBlfnvfWWgMNPPLhPnzhPmLQ
    pcGGTvVpcQLLzSPPPpVBVQwngNqgsJqgJgqSngsJMqJg
    RZDFGhtCDGmWfWsNdwJhnMgwswqJ
    ZCGjRGjZllFGHvvcTPjPTQpB
    FDVsWrFZnnnfNRJdgBBBMLsJLH
    wcThcTphvCThwTlblpzwGlpLRgHJWLgHLBHdHWJLBLWR
    mwcbPmClwlzlwvvbTmWbQSjZmZSrDnSNVZfVFnZf
    tMlttlFRSrcSFcwQSRwSzrMMPPGGPGLWgNfTNTcLPNPGBPPG
    pbZVCDTqnCjVDHnHVnhBPBBbhBhbhgLgmWLh
    qZCJZJqqjjCVvvRQltlzTrJtMMMw
    QvvdBDdMbdFFJrMMjjmjCfCntC
    lHTPsNLPcfVZLnfj
    GgsWpHPpTPWpNsGvgdnDbQRQFRbdQg
    jPNwllsVZjhslSjwGShZMdJDmmdmWLtMDDPHMPFd
    QbvpDrbBrtMbbHJmcH
    vznvzBRpBprQBqQZjNswwZDnSlGjZl
    PdNTzLQPLrVMzGcMtt
    FsSvDrvmrwDggHGwgV
    vlpZpZmfnmFTlTWJWdbrdh
    mZmnggMTSJrrmnrbmTbngJMtwPvwzzRvPGhQdGZPGPLvGvRd
    FFVBNHVlFlDfCsWwLwPzzhGPCvzhQv
    qBHLsDcfqFfDDfsFLNcNNBFsrgpMpnJSbnmTnrtmbMSqnpnr
    qjBNwBPNPspqddssbsTsMDhTDrThQb
    gvzZSZzFbgHnrHmn
    fcvfZcRSZFGfZcvFbGttcPfpVjWVwqBqdwNdwNNpqV
    RrTmtTrqznrnRCSqJrWlWDbhWVnfVDVWdclV
    QBBgHQGvHHQswLHQQLGLHdLhfhlZZFlsscVDZfWfDhVlZZ
    dLBMPpGPjLHPHPBHjjgQjHQztSJRztmrNCSCmSpmprrrrz
    HHWJgjjsJrPBWBjgWgDvbbvtbNDNVtttMPPp
    SnLTlhhNSntRVVLFVbbb
    ChqdcNTNqqJCrQrQrrBC
    BvfLLngFLDrrlDFDDnGmGlmzqzdGqMMWWwWW
    RVsPbsbVZbjctccCcsCSPmdNqMqMWddwqVzhhNHwHd
    tcsjPZRctZTSbbtSbtsSjZznnJfJBrfJgLvJJDDBvpTrgp
    LJJsNdtJQtbWRJQttjGhjVnjcnzcsczGqj
    MDPPlvCwrTlZfMMvTlPTdVcVhVVjchSBrjccSnnq
    lgZCvTTZfMgHLptdRgmR
    gCDrJRNgJDZRCwMgqGbtVVjTjlFbbTtR
    mccnfcnSQScdvdcQQQpWdnWSjPqTbFFlbPqbPVGNjTPjtN
    NnzmpWmBBzzpzDgwhDghrZrw
    wcbVDBQwVBFQLFQDQcqQcLcJfpHJjmljGgMHfcfgGgjf
    PtnWMtSnlgJmWWmm
    nThPtRnzntstvrtRPqDFLMLdDwBBFLQDBT
    zshqnVqTwqHqZQgZDSZjpFjFFF
    PsBRvttdcgFFBSmc
    GlPsbLtrvrrrtJlCTnVTlwwfnhwVqH
    CvVVnFwWZnZwJZMNlCMNMpbMrrQG
    cpghqzqqtzbGMjTNclGN
    PqLBsgqBsSfBffShVmvRVwWsFpwZVpsn
    LzsLSScvscqNdGdgddQjCDbzhpCDbRbhDpDDwDwt
    ZlMBBBnlMFVFHVMJflJjJBfhRnCbCDpRttRPDCbWpCRbpW
    mlrFmJrmscNGmsjm
    FqQjLRjfvTFvlPHHNPMBDDNDPR
    chWptpcWTzBPMsMMMBHW
    zcJghwJZpZcgnctccdzzpGQrbQbblFFlTCCFTbdCFCFq
    QcwNpCcQzpwtCGPPPnrGrfHfvN
    FgjhhhjMVFVjqRRqDBVBqvMZvdrHnPZWZvsnZHdWnv
    ShBFhDVghhTBgBBFRRgRCmCPCcpPbwCmLTcCmbpb
    ZzlzsBzZnWnsBhFRvfvvLfWqfvMv
    GgQGjjddHHPwpHpTGjPdHMvtvwJqLtJRFlRFRqMwLc
    dgbbdjpGGgTHGGgQgdpmpgblrBrhrhCBSSznChsVhBsmNB
    PhSwPdnpsmSWWcjjDFNqnc
    GJGCTLbTZTrlfflVLFchHDHHDFcVVN
    RhlhrllQZhCsPvRBvMtSvw
    GVgnrgTWGVGjLVjWSpvvNmPTmpQmzvhf
    tBbBDsFtszzSSbPZbh
    BqlqdcqSJtFMdMjWrnGCWRrWGG
    sJVJsQhMhPPSQMwdHRmmsmmwRmsr
    zLFjLDTBFNWWwrqrffldlRdFRq
    BLjzjTpzLpzWGTbQpMJvVMQwQhhMQM
    RqSztDRhJDLmRMLlfvsP
    dMdMMHZCsnbdvmbP
    VHcZVVcZTwTQpgHQcgFMFBpDDzBqqqDhqJSjSjJjSD
    rdMnMGjdHhfnjqWWDJPpGWPtvW
    PTBSQSSzZSBSCzQFFSlZTFSvcZpWWcJvtJppvZpLLcDVcv
    sgQCsBmmlFCPFFzTgTBgdNnrNndnMrrrfbrNjf
    bpZdggTjHbgLglpHjldvHpjdhTVzmhzzzFPzmhFsFQSFnhhN
    rPCDBcCCMPGcWDNNWQzQQSNQnNzQ
    fCCJtDtGGGfGBtGqBrrcfRBcvPwpLgdZZvHdljvqpvdwbpvl
    qpmsNldnlHlCqQlHsHNHwJpJMtwvvvjMvfWjpDtt
    TccVBScrzBzzTGPbVTPQhWjfMjwwRtJtjMtWDWWfDS
    FQFbzBGczGBFLnFmmqsCLg
    qpblblvpvJzStJDrhrnGrdhDfFqf
    ggNQNwBgmTcgCBTBTQQjNfDCnZRRRrRGCnrFfdnhrC
    mjVFHQTHNjTwcmpzJzHltltbSssS
    WChWmdcmzndhFcZrrbvrVMVssj
    NQLDlDplpSJGpLfRRMZVBBGjVsGbbjbBZsGv
    QNDfNqlpLgSfNfNgNfpgpqwndwWwnCCnnTFMdHndzn
    ZGRPTngTZMSGMGnhSgRjQHsPbqjmsWHQCQWbNN
    BFLLfpzVDBfDdlfQcsbVcNmQsqqbcC
    zFvdplLDLtzFmrrwMMtTrShZ
    nTdmnVCGqTsSBTqv
    HlMPwMlHfPSfBBmFBfSL
    trHHwRHRwMHPMJQJHnDhbdRhdpCZmChNnd
    lwHWjzplvHqWHGsMLsLwLfgdfLdg
    tPJNPQmQmSGcTtFmctGmSCBgsBBRbLBRVdLVLCBBLgVf
    FPtTPQNPrPPQctTcNPSQJJPDjlzplnGDDjWWplWHhGvpnr
    jwvvDbvsRsrrjrfvfrrZsPpCpmPJJPqlqWmzRJRTqq
    HdLttdSQHdLHMMtNdLMSTtHpCmPplWhCzmzmPWlJhlNplP
    BTSLtLLQtnVZDnffbwfw
    snvQdrtrQprWpgmGLp
    FhzwlwHccBcljFBSDmHmLpgRmPDCffWL
    zFhllqjczzwJqqSqlZMsvJgVNMTbssVNnQbb
    dLZHrWjWPFZWZnPjZttjddFnMDVMGJMQqvMVGVRVpjVpGVvv
    zhzTwTlfTwCsShSgNhfzsQQqvMQStQMDGJJGvGQVvq
    TTwCBfsfBwhzwTBCzlmHZdLmBBbtLnLbFnnF
    BhBRLFmlBlmhgShHmhSlZlFgvbQNwvcsvMCcsQCwNQvNMsBw
    ttWddDjrfjDcssscDbvH
    jfjfPWdzdfjdnWpjtrzqnhmJGJFhSJRHSmSmlqlHmq
    QvJTgvsvghHRHHNbZvNZTRSzBBCLrDqzrfDDtJSqSLBC
    cPPwdcFFPDwfFrBrFfFfrC
    nppwdplpRvllsgDH
    BGLLWLLwHVZwHnNhwsMsrqMqhh
    STlTpDpmjzmjjjgccqdsbNbBhlNnNMhsqs
    pjmgjfSDSzmSgFzRZQfRRZLBVLVtZZ
    WHjddztMtVLNNFFTmbFPFPRw
    bJnvpQfqccQJZfpcbvCphcFGDPFGRwDGDDGwGsmPFnPF
    rvffQJZJqrpZCJZJQrQpvBvStlSWSzVSWBbzBLzjtjWWWj
    SJFMSMGSDLTsFgHvHL
    mNzRrRRzjzqqgPHvLTHjlvWg
    ZLbRpRnRnCrbmnmrRRNnwbGfMwDwfDDdSVMdVJdd
    nsqTbhcDssPsPWsnchPJMSTSMmJMwTSTCJJfJw
    DHvFvvdHpvpGFHDMVVJVplCCVpggCl
    RdQjtvHtDQNGsZqzcqPqbNcq
    GFzRjczzQJnLjJvvTj
    mSfHrNHDzHDrDSSSBvTZLTNqWJWBWLlv
    PfgCmfPzDVrtHsddVMsRFcVFQM
    sfBgfBfBsHBHFGhsqfjgQZtQQMdZgbZQptbM
    rNLRSzRTrrvvLSTWGpjpNZdQPtGtMdNM
    wvSWLwzTGTCcwwwJwvwcrcRcVfFBqhhVhDqhBllBfFqBCDCs
    LbTpDTcMTSzzMLhScnDnSppNQwVNZFBVnFsrwQQZrQrQrN
    tJtJCRlGWljGWCtjJZVPsJBsVwQmrQNN
    fvHRftqjGfWGwtfGqvLTzDTzzzchSbMDTd
    JJhWZlhqLDHtBDrqrB
    bwwmfrSmbmFjVSFQwSdpDvGdpPnRvDtHpGtGPG
    VgFfcSQfFgmLLrNThllTZc
    QmfvrpnvrrJGnBSCFTBMSWFS
    NVMggbVPzCTgDFDD
    NRqHRZjVRZdRVdZwNPrMrchGhGpcGfvhQlHJ
    nlBdCldndlZTttSSBBccPfGWLLHcTTcWPbbW
    jpsFzFmzDzNzDGChGcGGmPQHQf
    CNzqvvVJNFqvgRtlqRtdnwSZ
    MJtDbNHDDpmVPJVzzjLm
    RslhvlfRTWvWWRwfllSZngmggznjSPznLjmSnz
    TlhffRwWQhChDqbBQLFHqNrb
    HWnmSbzflWltlzLfWWDzjMBvCjjCTCgcMvzBBB
    qRRRZJwhZFGdRNfghVjMVVgfcghC
    QFFqwNNNwdNZZpqqZfnDSHmmlDLtWtHWlQmD
    JrFdNTTLRBTJrFVrBNdVLFBdlHbzQQsQzbPJtpbtltWsHbQw
    gZffDfMlCfjCSqMcpHPWHszstzHjQwpb
    GMnvfGlfvSqvcMMDgDDcfnqSVFRdmTmVdNBTdmRmBFVnLLBT
    ZvRHtDcZntLZssMssQBrMdnC
    jglqlVdlbqgVWjJMbrrBCpmQBBfrpm
    GqVVPPjPNjFVllNjJjFDvzTLZRvcLRLvTGdGDv
    fDVzvVfzzZPMsMbb
    LHtBwLBdhFgdHLLthRwFGGMsmrHMmmbZSmqbMGGG
    bblRwbTRlllfVQnCQn
    fVZzjRzpzpVCRPZhVWQvvLsWWWFQlmjWmG
    JDHgJdtwbZqJqsWBBDLlQlvLms
    cHHtdbqwrqbbtSbTgSTcVCMRZnRRVNhVPNMPpfMc
    fCMPBBdpMpsqMssQccnV
    TlwGWDjDZHLjZHHlLGmnlnNcRllsJcqtsJRV
    ZHhZHThLLrGwjDDjLwGWWWSjPpbpzrvBFBFdBBbqvCbpFfpg
    bvDfDPtCVfFFVdWWpmLRmzWzzdBW
    jgZTghhjrGrsswrsghHrlgTGzSRmMLwpJMSMzWLLWRzpRRSc
    lpjTpGHlpsNGTHllHrCFnDNPtVnvfQtQtQNP
    BwlQcwZBwwwQNqJTrrsRGCDTNt
    bMpVPSfRvCbCtTqsCs
    dPSRfRpPPjjmLMgZBZBLZZwFQnZn
    TsVfggTqVnsLVTdTpmDdRhwPRtPRDRwD
    ljHBSWZvvFWvBFPppnQPwnpmzR
    MSHSjbBclBSjccLJgqgnLVqTbsTT
    zncfVgRzVJgnTfVqNHvZJZNJNMpHbdvH
    PCBpsLjPPmMGdHNdHBHZ
    jSLlrhLPDWLrPrDCLPCfnpzcVRFcRTnlVncntT
    ccvSgjHtRjcjSvjvSrBjzSHHwnJPbgwPPZVVVZnPpZlpwnlT
    ffqNqGGsGWqLTNqZwdndPnnJJpZVJW
    sNmqhsCMQsMTmjrcmrHrRj
    gWWWzNVJDwDzVWVDGbGNnhTnHLsmhmhfsQTNSmHd
    vtMPZvrZvqtqBHljrqSnnmTfLfdnQsjhjmhL
    MMPZPBqZCrBtvZcrBlDbGbbbzHJCbbRwgwDz
    hGSRhsMswhcNNGwhwncMnCqCJNrHJPJJrJtCJdqHJm
    BgVTzWBdTfCmfCJH
    dlbVFvvWVZhSRQDMnlhc
    WfpzBZmgJlQVGvWF
    wHSbrHwmccnrmrHsClGqFGbQjQjjQJQQGv
    SHPwwsRcrrNtrNSsphmZLzpfzhghZPdD
    DFDPRpmgbPQtmgBBQDDNJTMMBZsqsZGqGZTGCGSqWG
    fVvVVLcJVzlvzhqfSTCsZsMGMHqq
    zJdrrdnzcLlwczwbQmQngRDQPbtDpQ
    HDZZrpFqwRrQfBqhjjlVlQ
    czTgvvWPNgPGcTlsQflCVshClC
    PgNvtSJNvGVMMzNzgGvPGGLHFDdFdmZSZRdDdRrmpFwL
    SVHNVFVPBHJqHhgFCgzLmCwppm
    DvDdsGZljDlfdZnjnnZGMzLpRgLfMCLmzfPLhmgp
    jZDZlrvrZTrTrTQrDsjslHNJqtWbWHbqbPBWNVQWBJ
    NmGGBdWWJDJTTZHm
    hFVhcqFjncpcppSjqfppqDvzDDDbbDZvDZZbHfJgvJ
    jrPqnnHnqSPwPGWPdWst
    BfhbwMwbbPbHPPPlrdJjrlMJLrJVTd
    pnQnGnWDjnJdlJCh
    qshsWvpttzNNQDtzRRPvwfcPHBBBHwbw
    SHzGRQjhwwhGzjjwRjfBqpqbNCqNnnqqQqPlQC
    TZtgLmZgVmgdFgmZtdrbNqnqlNlpblnlrnBd
    DvgmvvZgmWJJjwHHhJSzps
    JjlrlJjPJgDjJjJnDRDjNwGGqMvSddvPvwQddqSVvq
    SLpphFLhFZhWLzvswwWqsqVVQWdv
    FSHtTLZpfzRDDrJgRNjT
    wjCMvrMlqqWHvWqddrHqgnBNhcffthhVLtpgLBnw
    GbQFZzZZphnpgNZV
    FhFzRTDRPzsRQGQGTFlllrJHjdsJlHMqjjHr
    LqDcTbmJcqSJSTmnrTcmJrfffplfjZsGZfGGZfQLdplj
    hWddgBvzWFZfPsQlGh
    RBWBRCdHtgHttVVzHBVNNNDwSTDcSSSbScDDwbwbnmRS
    FFPzwlZVVrzFFlFLVlllZdHCHPQMnJQQbhhChdhCbb
    BRRqGBgRfqvgvBDDDTRgghNCMMTQNNbVJMNJJdbbdT
    DfpgjGfsRWrFVzwLcs
    PMTSdSmFjhFpNTqvppvRBrRBrDqB
    HnZZznJbzGZGlZtZWHlJGcGcwMvQBsrwRDQvcDgrgDgrqRvq
    HGlGfnJZfMMCfNhm
    nRssqlqVRppVwdMMQwFgtRFz
    smTvLLTvvNLtwMMQNg
    CmPGBvZGWvBSGGDmTZjZlhpJcpHDJsbDnlrrprpl
    djcQGNQqdGdGqMCgndwgCLDMgW
    nvBvHpBppnvPPnJTBWLJVMwVfWJfCbfWgW
    hsHHpBsvRTHpsPszTBTTsRTslGqGqlcqlScnqmhZmmZSZSjl
    DddBHCmfWCBTDBHTHfMpzhzpJJMJsFrGrz
    tPVPmbnttjPnZvSvSbnmZPZPNpNGMpJNzzNrGJpvhsshMpFs
    mwnZcbmmStbVtVjbZVlcLTBlcLCRHRDWCWWW`


    const scoreData: Record<string, number> = {
        "a": 1,
        "b": 2,
        "c": 3,
        "d": 4,
        "e": 5,
        "f": 6,
        "g": 7,
        "h": 8,
        "i": 9,
        "j": 10,
        "k": 11,
        "l": 12,
        "m": 13,
        "n": 14,
        "o": 15,
        "p": 16,
        "q": 17,
        "r": 18,
        "s": 19,
        "t": 20,
        "u": 21,
        "v": 22,
        "w": 23,
        "x": 24,
        "y": 25,
        "z": 26,
        "A": 27,
        "B": 28,
        "C": 29,
        "D": 30,
        "E": 31,
        "F": 32,
        "G": 33,
        "H": 34,
        "I": 35,
        "J": 36,
        "K": 37,
        "L": 38,
        "M": 39,
        "N": 40,
        "O": 41,
        "P": 42,
        "Q": 43,
        "R": 44,
        "S": 45,
        "T": 46,
        "U": 47,
        "V": 48,
        "W": 49,
        "X": 50,
        "Y": 51,
        "Z": 52,
    }

    let score = 0;

    const bagsArray = bags.split(/\n/).map((string) => string.replace(/\s+|\s/, '')).map((bag) => {
        const first = bag.slice(0, bag.length / 2);
        const second = bag.slice(bag.length / 2, bag.length);
        const newBag: any[] = [first, second];
        return newBag
    });


    const duplicates: any[] = [];

    bagsArray.forEach((bag) => {
        let newDuplicate: string = '';
        const newSearch = bag[0].split('');
        newSearch.forEach((item: string) => {
            if (bag[1].includes(item)) {
                newDuplicate = item;
            }
        })
        duplicates.push(newDuplicate)
    })

    duplicates.forEach((item) => {
        const roundScore = scoreData[item];
        if (roundScore) {
            score += roundScore
        }
    })


    const fullBagsArray = bags.split(/\n/).map((string) => string.replace(/\s+|\s/, ''));


    const groupsArray: any[] = [];
    for (let i = 0; i < fullBagsArray.length; i++) {
        if (i % 3 == 0) {
            const newGroup: any[] = [];
            newGroup.push(fullBagsArray[i], fullBagsArray[i + 1], fullBagsArray[i + 2]);
            groupsArray.push(newGroup)
        }
    }
    console.log(groupsArray);
    const groupTypes: any[] = [];


    groupsArray.forEach((group) => {
        let foundChar: string;
        group[0].split('').forEach((char: any) => {

            if (group[1].includes(char)) {
                if (group[2].includes(char)) {
                    foundChar = char;

                }
            }
        })
        groupTypes.push(foundChar);
    })

    console.log(groupTypes);

    let groupScore = 0;

    groupTypes.forEach((item) => {
        const roundScore = scoreData[item];
        if (roundScore) {
            groupScore += roundScore
        }
    })
    console.log(groupScore);



    return;






}