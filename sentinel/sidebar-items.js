initSidebarItems({"struct":[["Sentinel","Sentinel is templated on an immutable Request type, a mergeable Claim type. It further takes a Name type to identify claimants. Signature and PublicSignKey type are auxiliary types to handle a user-chosen cryptographic signing scheme."]],"trait":[["GetSigningKeys","The Request type needs to implement this GetSigningKey trait. Sentinel will call get_signing_keys() the first time it receives a request for which it does not yet have any associated keys."]]});