"""Tests for the Websocket API Client."""
import pytest

import solana.system_program as sp
from solana.rpc.websocket_api import WebsocketClient
from solana.rpc.commitment import Commitment, Finalized
from solana.transaction import Transaction


# from .utils import AIRDROP_AMOUNT, assert_valid_response, confirm_transaction, generate_expected_meta_after_airdrop


@pytest.mark.integration
def test_idk_yet():
    """Test something but I'm not sure"""
    socket_client = WebsocketClient()
    assert socket_client._commitment == Finalized
    assert socket_client._provider.endpoint_uri == "http://localhost:8900"

    # Next up: recreate my typescript scratch script
