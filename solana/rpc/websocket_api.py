"""Websocket client to interact with the Websocket Solana JSON RPC Endpoints."""  # pylint: disable=too-many-lines
import asyncio
from typing import List, Optional, Union


from .commitment import Commitment, Finalized
from .providers import async_websocket

# Multiple subscriptions may be active at once


class WebsocketClient:  # pylint: disable=too-many-public-methods
    """Websocket client class."""

    def __init__(self, endpoint: Optional[str] = None, commitment: Optional[Commitment] = None):
        self._commitment = commitment or Finalized
        self._provider = async_websocket.AsyncWebsocketProvider(endpoint)
        # self.loop = asyncio.get_event_loop()

    # def
