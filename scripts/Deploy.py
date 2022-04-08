from brownie import IPFS,config,accounts
from scripts.helpful_scripts import get_account
def deploy_IPSF():
    account = get_account()
    ipfs = IPFS.deploy({"from": account})

def main():
    deploy_IPSF()